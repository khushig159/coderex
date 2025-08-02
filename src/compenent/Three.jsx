import Spline from '@splinetool/react-spline';
import React from 'react'

function Three() {
  return (
    <>
    <div className='absolute top-[12rem] left-0 text-[3rem] overflow-y-hidden z-11 w-[30rem] text-[#F5EAD7] cont'>Create your dream home with us...</div>
    <div className='h-full w-full'>
         {/* <Spline
        scene="https://prod.spline.design/RHw9trcLnpEDu9lN/scene.splinecode" 
      /> */}

    </div>
    <div className='h-[3rem] w-full absolute bottom-0 left-0 bg-black box z-10'>

    </div>
    </>
  )
}

export default Three
// Scroll transforms with spring
  // const yHeroRaw = useTransform(scrollY, [700, 900], [0, -150]);
  // const yHero = useSpring(yHeroRaw, { damping: 20, stiffness: 80 });
  // const opacityHero = useSpring(
  //   useTransform(scrollY, [700, 800, 1000], [1, 0.5, 0])
  // );

  // const yHero4Raw = useTransform(scrollY, [700, 1000], [160, -110]);
  // const opacityHero4 = useSpring(
  //   useTransform(scrollY, [700, 800, 900], [0, 0.5, 1])
  // );
  // const yHero4 = useSpring(yHero4Raw, { damping: 20, stiffness: 80 });

  // const yHero5 = useSpring(
  //   useTransform(scrollY, [1000, 1300], [150, -100]),
  //   { damping: 20, stiffness: 80 }
  // );
  // const opacityHero5 = useSpring(
  //   useTransform(scrollY, [1000, 1100, 1300], [0, 0.5, 1])
  // );

  // const yHero6 = useSpring(
  //   useTransform(scrollY, [1300, 1500], [200, 0]),
  //   { damping: 20, stiffness: 80 }
  // );
  // const opacityHero6 = useSpring(
  //   useTransform(scrollY, [1300, 1400, 1500], [0, 0.5, 1])
  // );