export const lightTheme = {
  limeYellow: `#e1f465`,
  darkLimeYellow: `#bacc46`,
  darkBlack: `#040403`,
  whiteColor: `#fff`,

  primaryGreen: `#1AD079`,
  primaryDarkNavy: `#07133B`,
  secondaryVeryLightGrey: `#F8F9FB`,
  secondaryLightGrey: `#F3F3F6`,
  secondaryGrey: `#C2D1D9`,
  secondaryWhite: `#eee`,
  //Hover Color
  additionalDarkGreen: `#17b66a`,
  additionalNavy: `#091849`,
};

export const darkTheme = {
  limeYellow: `#9db408`,
  darkLimeYellow: `#eee`,
  darkBlack: `#bbb`,
  whiteColor: `#666`,

  primaryGreen: `#156439`,
  primaryDarkNavy: `#07133b`,
  secondaryVeryLightGrey: `#45e66b`,
  secondaryLightGrey: `#171762`,
  secondaryGrey: `#136a9a`,
  secondaryWhite: `#9c1313`,
  //Hover Color
  additionalDarkGreen: `#17b66a`,
  additionalNavy: `#091849`,
};

export type Theme = typeof lightTheme | typeof darkTheme;
