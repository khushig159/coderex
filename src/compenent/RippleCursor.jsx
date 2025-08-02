import React, { useEffect, useRef, useState } from "react";

const TAIL_LENGTH = 10;      // How many points in the tail
const FADE_OUT_DELAY = 30;  // ms to wait before tail starts fading
const FADE_OUT_DURATION = 60; // ms for the fade

/**
 * Returns an SVG pastel gradient (editable for your style)
 */
function PastelGradient() {
  return (
    <linearGradient id="pastelTail" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#ffeae3" />
      <stop offset="16%" stopColor="#e3fafc" />
      <stop offset="32%" stopColor="#e1e7fa" />
      <stop offset="49%" stopColor="#d7e9ed" />
      <stop offset="65%" stopColor="#fde5f2" />
      <stop offset="80%" stopColor="#fdf6e9" />
      <stop offset="100%" stopColor="#eafaf1" />
    </linearGradient>
  );
}

export default function PastelTail({ width = "100vw", height = "100vh" }) {
  const [points, setPoints] = useState(
    Array(TAIL_LENGTH).fill({ x: width / 2, y: height / 2 })
  );
  const [opacity, setOpacity] = useState(0.9); // Pastel, gently present
  const trailRef = useRef(points);

  // Fading logic
  const fadeTimeout = useRef();
  const fadeInterval = useRef();

  useEffect(() => {
    const trail = trailRef.current.slice();

    function onMove(e) {
      const x = e.clientX;
      const y = e.clientY;

      // Reset fade if moving
      setOpacity(0.9);
      if (fadeTimeout.current) clearTimeout(fadeTimeout.current);
      if (fadeInterval.current) clearInterval(fadeInterval.current);

      // Add point to front, slice extra
      trail.unshift({ x, y });
      trail.length = TAIL_LENGTH;
      setPoints([...trail]);
      trailRef.current = trail;

      // Start fade after pause
      fadeTimeout.current = setTimeout(() => {
        let op = 0.9;
        fadeInterval.current = setInterval(() => {
          op -= 0.04;
          if (op <= 0.01) {
            setOpacity(0);
            clearInterval(fadeInterval.current);
          } else {
            setOpacity(op);
          }
        }, FADE_OUT_DURATION / 30); // Smooth fade steps
      }, FADE_OUT_DELAY);
    }

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (fadeTimeout.current) clearTimeout(fadeTimeout.current);
      if (fadeInterval.current) clearInterval(fadeInterval.current);
    };
    // eslint-disable-next-line
  }, []);

  // Build the SVG path string
  const pathData =
    "M" +
    points.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" L ");

  return (
    <svg
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width,
        height,
        pointerEvents: "none",
        zIndex: 99999,
        transition: "opacity 0.27s"
      }}
      width={width}
      height={height}
    >
      <defs>
        <PastelGradient />
      </defs>
      <path
        d={pathData}
        stroke="url(#pastelTail)"
        strokeWidth="18"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        filter="blur(7px) saturate(1.7)"
        opacity={opacity}
        style={{
          transition: "opacity 0.27s"
        }}
      />
    </svg>
  );
}
