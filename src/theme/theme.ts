export const lightTheme = {
  //Finally color
  inputbackgroundcolor: `#FFFFFF`,
  inputbordercolor: `#C2D1D9`,
  placeholdertextcolor: `#C2D1D9`,
  textcolor: `#07133B`,
  inputactiveborder: `#1AD079`,
  primarygreenbuttonbackground: `#1AD079`,
  primarygreenbuttontext: `#07133B`,
  primarynavybuttonbackground: `#07133B`,
  primarynavybuttontext: `#ffffff`,
  mainbackgroundcolorsite: `#F8F9FB`,
  cardgroundcolor: `#F3F3F6`,
  linktextcolor: `#07133B`,
  linktextcolorhouver: `#1AD079`,
  footerbackgroundcolor: `#07133B`,
  footerlinktextcolor: `#ffffff`,
  boxInputBackgroundColor: `#ffffff`,
  boxInputBorderColor: `#07133B`,
  categoriesBackgroundColors: `#1AD079`,
  tagBorderColors: `#07133B`,

  //Hover Color
  primarygreenbuttonbackgroundhouver: `#21ff95`,
  primarynavybuttonbackgroundhouver: `#0f2776`,
  footerlinktextcolorhouver: `#21ff95`,

  //---------------------------------
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
  //Finally color
  inputbackgroundcolor: `#141419`,
  inputbordercolor: `#30363D`,
  placeholdertextcolor: `#6e7681`,
  textcolor: `#FFFFFF`,
  primarygreenbuttonbackground: `#1AD079`,
  primarygreenbuttontext: `#010409`,
  primarynavybuttonbackground: `#21262d`,
  primarynavybuttontext: `#ffffff`,
  mainbackgroundcolorsite: `#010409`,
  cardgroundcolor: `#0d1117`,
  linktextcolor: `#ffffff`,
  linktextcolorhouver: `#21ff95`,
  footerbackgroundcolor: `#0d1117`,
  footerlinktextcolor: `#ffffff`,
  boxInputBackgroundColor: `#0d1117`,
  boxInputBorderColor: `#ffffff`,
  categoriesBackgroundColors: `#21ff95`,
  tagBorderColors: `#ffffff`,

  //Hover Color
  primarygreenbuttonbackgroundhouver: `#21ff95`,
  primarynavybuttonbackgroundhouver: `#2f3948`,
  footerlinktextcolorhouver: `#21ff95`,

  //---------------------------------

  limeYellow: `#9db408`,
  darkLimeYellow: `#eee`,
  darkBlack: `#bbb`,
  whiteColor: `#666`,
  inputactiveborder: `#1AD079`,

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
