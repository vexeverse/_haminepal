export const variantGeneral = {
  initial: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.3,
    },
  },
};

export const variantGeneralDelay = (delay: number) => {
  return {
    initial: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.3,
      },
    },
  };
};
