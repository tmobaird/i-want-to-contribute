import tinycolor from 'tinycolor2';
/**
 * Provided a background color, getTextColor return the most readable color for your label.
 */
const getReadableTextColor = (bgColor) => {
  let fgColor = "#fff";
  if (bgColor) {
    let tinyColorBackground = tinycolor(bgColor);

    if (tinyColorBackground.getLuminance() >= 0.85) {
      fgColor = "#545454";
    }
  }
  return fgColor;
}

export default getReadableTextColor;
