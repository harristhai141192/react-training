import { widths, heights } from '@themes/metrics';
import { colors } from '@themes/colors';
import { fontSizes } from '@themes/typography';

export const Button = {
  baseStyle: {
    fontWeight: 'bold',
    borderRadius: '4px',
  },

  sizes: {
    default: {
      width: {
        base: widths.extraTiny,
        sm: widths.medium,
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
      width: { base: widths.small, md: widths.small, lg: widths.small },
      textTransform: 'uppercase',
      letterSpacing: '1.2px',
      borderRadius: '0px',
      bg: colors.green[1000],
      color: 'white',
      _hover: { bg: colors.green[950], color: 'black' },
      fontSize: {
        sm: fontSizes.text.small,
        md: fontSizes.text.small,
        lg: fontSizes.text.small,
      },
    },

    outline: {
      letterSpacing: '1.2px',
      textTransform: 'uppercase',
      bg: 'white',
      border: `1.5px solid`,
      borderRadius: '0px',
      borderColor: colors.green[1000],
      color: colors.green[1000],
      fontSize: {
        sm: fontSizes.text.small,
        md: fontSizes.text.small,
        lg: fontSizes.text.small,
      },
      _hover: { bg: colors.green[950], color: 'black' },
    },

    ghost: {
      textTransform: 'uppercase',
      borderBottom: '3px solid',
      borderColor: colors.green[1000],
      borderRadius: '0px',
      fontSize: {
        sm: fontSizes.text.small,
        md: fontSizes.text.small,
        lg: fontSizes.text.small,
      },
    },

    link: {
      color: 'black',
      borderRadius: '0px',
      _hover: {
        color: colors.green[1000],
      },
      fontSize: {
        sm: fontSizes.text.small,
        md: fontSizes.text.small,
        lg: fontSizes.text.small,
      },
    },
    unstyled: {
      letterSpacing: '1.2px',
      textTransform: 'uppercase',
      borderRadius: '0px',
      padding: '0px 10px',
      bg: 'white',
      color: colors.green[1000],
      _hover: { bg: colors.green[950], color: 'black' },
      fontSize: {
        sm: fontSizes.text.small,
        md: fontSizes.text.small,
        lg: fontSizes.text.small,
      },
    },
  },
};
