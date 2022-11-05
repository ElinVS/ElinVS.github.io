
// fade in from left animation

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


// fade in from right animation

export const fadeInRight = {
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

export const fadeInRightChild = {
  initial: {
      x: 80,
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

// fade up animation

 export const fadeUp = {
      initial: {
          x: 0,
          opacity:0
        },
        animate: {
          y: 0,
          opacity:1,
          transition: {
            staggerChildren: 0.1,
          },
        },
      };
    
 export const fadeUpChild = {
      initial: {
          y: 80,
          opacity:0  
        },
        animate: {
          y: 0,
          opacity:1,

          transition: {
            duration: '1.2',
            type: "tween",
            ease: "easeInOut",
          },
        },
      };

// svg draw animation 

export const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible:  {
            pathLength: 1,
            opacity: 1,
            transition: {
              pathLength: {  type: "tween", duration: 1.5, bounce: 0 },
            }
          }
        };

// navbar animation

export const moveDown =  {
  initial:{ y: -400 },
  animate:{ y: 0 ,
  transition:{
    duration: 1.2,
    type: "spring",
    ease: "easeInOut",
    delay: 0.6,
    }
  }    
}

// round arrow div animation

export const moveUp =  {
  initial:{ y: 400 },
  animate:{ y: 0 ,
  transition:{
    duration: 1.2,
    type: "spring",
    ease: "easeInOut",
    delay: 0.6,
    }
  }    
}



//loader page animation

export const loader = {
  initial: { left: "-100vw" },
  animate: {
    left: "0",
    transition: { duration: 2.5, type: "tween", ease: "linear" },
  },
}

