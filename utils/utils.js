import colors from 'vuetify/es5/util/colors';

/**
 * @param {string} hex
 */
export const hexToRGB = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    }
    : null;
};

/**
 *
 * @param {string} color
 * @returns {string|boolean} hex value
 */
export const getHexFromStandardColors = (color) => {
  const colorDetails = color.trim().replace('-', '').split(' ');

  const colorWithModifier = colorDetails.length === 2
    && colors[colorDetails[0]]
    && colors[colorDetails[0]][colorDetails[1]];

  const baseColor = colors[colorDetails[0]] && colors[colorDetails[0]].base;
  const shadeColor = colors.shades[colorDetails[0]];
  // return the first successful attempt to identify the color or false
  return colorWithModifier || baseColor || shadeColor;
};
