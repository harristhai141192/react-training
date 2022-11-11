export const Container = {
  baseStyle: { p: 0, mx: 'auto', my: 0 },

  sizes: {
    default: {
      maxW: {
        sm: '360px',
        md: '690px',
        lg: '960px',
        xl: '1080px',
        xxl: '1260px',
      },
    },

    sm: {
      maxW: {
        sm: '320px',
        md: '400px',
      },
    },
  },

  variants: {
    default: {
      height: '100vh',
    },

    center: {
      display: 'flex',
      justifyContent: 'center',
      mt: '100px',
    },
  },

  defaultProps: {
    size: 'default',
  },
};
