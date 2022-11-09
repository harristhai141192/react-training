import { widths, heights } from '@themes/metrics';
import { colors } from '@themes/colors';

export const Button = {
  baseStyle: {
    fontWeight: 'bold',
    borderRadius: '4px',
  },

  sizes: {
    default: {
      width: { base: widths.extraTiny, md: widths.tiny, xl: widths.extraSmall },
      height: { base: heights.tiny, md: heights.small },
    },
  },

  lg: {
    fontSize: { base: 'text.small', lg: 'text.large' },
    lineHeight: {
      base: 'text.tiny',
      lg: 'text.extraSmall',
      xl: 'text.medium',
      xxl: 'text.extraLarge',
    },
    width: { base: widths.small, md: widths.medium, lg: widths.large },
    height: '40px',
  },

  md: {
    fontSize: { base: 'text.small', lg: 'text.large' },
    lineHeight: { base: 'text.tiny', lg: 'text.small' },
    width: { base: widths.extraLarge, xl: widths.huge },
    height: { base: heights.medium, lg: heights.large, xxl: heights.extraLarge },
  },

  sm: {
    fontSize: 'text.large',
    lineHeight: 'text.extraSmall',
    width: '70px',
    height: '35px',
  },

  variants: {
    solid: {
      fontSize: '13px',
      textTransform: 'uppercase',
      letterSpacing: '1.2px',
      fontFamily: 'RalewayExtraBold',
      borderRadius: '0px',
      bg: colors.green[1000],
      color: 'white',
      _hover: { bg: colors.green[950], color: 'black' },
    },
    outline: {
      fontSize: '13px',
      fontFamily: 'RalewayExtraBold',
      letterSpacing: '1.2px',
      textTransform: 'uppercase',
      bg: 'white',
      border: `3px solid`,
      borderRadius: '0px',
      borderColor: colors.green[1000],
      color: colors.green[1000],
      _hover: { bg: colors.green[950], color: 'black' },
    },
    ghost: {
      fontSize: '13px',
      fontFamily: 'RalewayExtraBold',
      textTransform: 'uppercase',
      borderBottom: '3px solid',
      borderColor: colors.green[1000],
      borderRadius: '0px',
    },
  },
};
