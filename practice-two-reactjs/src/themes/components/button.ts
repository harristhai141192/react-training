import { widths, heights } from '@themes/metrics';
import { colors } from '@themes/colors';

export const Button = {
  baseStyle: {
    fontWeight: 'bold',
    borderRadius: '4px',
  },

  sizes: {
    default: {
      width: {
        base: widths.extraTiny,
        sm: widths.small,
        md: widths.small,
        xl: widths.small,
      },
      height: { base: heights.tiny, md: heights.small, sm: heights.small },
    },
  },

  lg: {
    width: { base: widths.small, md: widths.medium, lg: widths.large },
    height: '40px',
  },

  md: {
    width: { base: widths.extraLarge, xl: widths.huge },
    height: { base: heights.medium, lg: heights.large, xxl: heights.extraLarge },
  },

  variants: {
    solid: {
      textTransform: 'uppercase',
      letterSpacing: '1.2px',
      fontFamily: 'RalewayExtraBold',
      borderRadius: '0px',
      bg: colors.green[1000],
      color: 'white',
      _hover: { bg: colors.green[950], color: 'black' },
    },

    outline: {
      fontFamily: 'RalewayExtraBold',
      letterSpacing: '1.2px',
      textTransform: 'uppercase',
      bg: 'white',
      border: `1.5px solid`,
      borderRadius: '0px',
      borderColor: colors.green[1000],
      color: colors.green[1000],
      _hover: { bg: colors.green[950], color: 'black' },
    },

    ghost: {
      fontFamily: 'RalewayExtraBold',
      textTransform: 'uppercase',
      borderBottom: '3px solid',
      borderColor: colors.green[1000],
      borderRadius: '0px',
    },

    link: {
      fontFamily: 'RalewayExtraBold',
      color: 'black',
      borderRadius: '0px',
      _hover: {
        color: colors.green[1000],
      },
    },
    unstyled: {
      letterSpacing: '1.2px',
      fontFamily: 'RalewayExtraBold',
      textTransform: 'uppercase',
      borderRadius: '0px',
      bg: 'white',
      color: colors.green[1000],
      _hover: { bg: colors.green[950], color: 'black' },
    },
  },
};
