
// animation used in Header.js and Title.js

export const fadeInLeft =  {

    initial: {
        x: 0,
        opacity:0,
      },
      animate: {
        y: 0,
        opacity:1,

        transition: {
          staggerChildren: 0.1,
        },
      },
    };
  
  export const fadeInLeftChild = {
    initial: {
        x: -80,
        opacity:0  
      },
      animate: {
        x: 0,
        opacity:1,

        transition: {
          duration: 1.2,
          type: "spring",
          ease: "easeInOut",
        },
      },
    };


