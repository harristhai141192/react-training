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
      height: { base: heights.tiny, md: heights.tiny, sm: heights.tiny },
    },
  },

  lg: {
    width: { base: widths.small, md: widths.medium, lg: widths.large },
  },

  md: {
    width: { base: widths.extraLarge, xl: widths.huge },
    height: { base: heights.medium, lg: heights.large, xxl: heights.extraLarge },
  },

  variants: {
    solid: {
      width: { base: widths.extraSmall, md: widths.extraSmall, lg: widths.extraSmall },
      letterSpacing: '1.2px',
      height: '35px',
      borderRadius: '10px',
      border: '1px solid grey',
      bg: colors.buttonSuccess,
      color: 'white',
      _hover: { bg: 'lightgrey', color: 'black' },
      fontSize: {
        sm: fontSizes.text.small,
        md: fontSizes.text.small,
        lg: fontSizes.text.small,
      },
    },
  },
};