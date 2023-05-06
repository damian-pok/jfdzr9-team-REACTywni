//import libraries:
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { Theme } from "./theme";

const GlobalStyle = createGlobalStyle`
${normalize}
:root {
  //global color styles - template wireframes colors:
  --dark-grey-color: #3B5266;
  --blue-grey-color: #5d81a0;
  --light-blue-grey-color: #a3bfcf;
  --light-grey-color: #C2D1D9;
  --very-light-grey-color: #F5F9FC;
  
  //Finally colors styles - dark mode:


  
  //global color styles - light mode:
    // Here will be defined colors for light mode
    //Finally color
    --inputbackgroundcolor: ${({ theme }: { theme: Theme }) => theme.inputbackgroundcolor};
    --inputbordercolor: ${({ theme }: { theme: Theme }) => theme.inputbordercolor};
    --placeholdertextcolor: ${({ theme }: { theme: Theme }) => theme.placeholdertextcolor};
    --textcolor: ${({ theme }: { theme: Theme }) => theme.textcolor};
    --inputactiveborder: ${({ theme }: { theme: Theme }) => theme.inputactiveborder};
    --primarygreenbuttonbackground: ${({ theme }: { theme: Theme }) => theme.primarygreenbuttonbackground};
    --primarygreenbuttontext: ${({ theme }: { theme: Theme }) => theme.primarygreenbuttontext};
    --primarynavybuttonbackground: ${({ theme }: { theme: Theme }) => theme.primarynavybuttonbackground};
    --primarynavybuttontext: ${({ theme }: { theme: Theme }) => theme.primarynavybuttontext};
    --mainbackgroundcolorsite: ${({ theme }: { theme: Theme }) => theme.mainbackgroundcolorsite};
    --cardgroundcolor: ${({ theme }: { theme: Theme }) => theme.cardgroundcolor};
    --linktextcolor: ${({ theme }: { theme: Theme }) => theme.linktextcolor};
    --linktextcolorhouver: ${({ theme }: { theme: Theme }) => theme.linktextcolorhouver};
    --footerbackgroundcolor: ${({ theme }: { theme: Theme }) => theme.footerbackgroundcolor};
    --footerlinktextcolor: ${({ theme }: { theme: Theme }) => theme.footerlinktextcolor};
    --boxInputBackgroundColor: ${({ theme }: { theme: Theme }) => theme.boxInputBackgroundColor};
    --boxInputBorderColor: ${({ theme }: { theme: Theme }) => theme.boxInputBorderColor};
    --categoriesBackgroundColors: ${({ theme }: { theme: Theme }) => theme.categoriesBackgroundColors};
    --tagBorderColors: ${({ theme }: { theme: Theme }) => theme.tagBorderColors};

    //Hover Color
    --primarygreenbuttonbackgroundhouver: ${({ theme }: { theme: Theme }) => theme.primarygreenbuttonbackgroundhouver};
    --primarynavybuttonbackgroundhouver: ${({ theme }: { theme: Theme }) => theme.primarynavybuttonbackgroundhouver};
    --footerlinktextcolorhouver: ${({ theme }: { theme: Theme }) => theme.footerlinktextcolorhouver};

    //Images
    --MenuLogo: ${({ theme }: { theme: Theme }) => theme.MenuLogo};
//---------------------------------

    --lime-yellow: ${({ theme }: { theme: Theme }) => theme.limeYellow};
    --dark-lime-yellow: ${({ theme }) => theme.darkLimeYellow};
    --black: ${({ theme }) => theme.darkBlack};
    --white-color: ${({ theme }) => theme.whiteColor};

    --primary-green: ${({ theme }) => theme.primaryGreen};
    --primary-dark-navy: ${({ theme }) => theme.primaryDarkNavy};
    --secondary-very-light-grey: ${({ theme }) => theme.secondaryVeryLightGrey};
    --secondary-light-grey: ${({ theme }) => theme.secondaryLightGrey};
    --secondary-grey: ${({ theme }) => theme.secondaryGrey};
    --secondary-white: ${({ theme }) => theme.secondaryWhite};
    //Hover Color
    --additional-dark-green: ${({ theme }) => theme.additionalDarkGreen};
    --additional-navy: ${({ theme }) => theme.additionalNavy};






  //light/dark mode colors:
    // Here will be place for light/dark mode

  //global font sizes:
  --Default-Headline-1-size: 2.5rem;
  --Default-Headline-2-size: 2rem;
  --Default-Headline-3-size: 1.5rem;
  --Default-Body-size: 1rem;
  --Default-Signatures-size: 0.75rem;
  --Default-Body-width: 83.25rem;
  --Default-Distanse-beetween-sections: 5.62rem;

   //import font style:
  font-family: 'Poppins', system-ui, Avenir, Helvetica, Arial, sans-serif;

  //global font style:
  color: var(--textcolor);
  line-height: 1.8;
  background-color: var(--mainbackgroundcolorsite);
  scroll-behavior: smooth;
}

*{
  margin: 0;
  padding: 0;
}

html{
    scroll-behavior: smooth;
}

body {
  width: 100%;
  margin: 2rem;
  background-color: var(--very-light-color);
  display: flex;
  justify-content: center;
}

main {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  min-height: 95vh;
}

h1 {
  font-size: var(--Default-Headline-1-size);
}

a {
  color: var(--primary-green);
  text-decoration: none;
  :hover{
    color: var(--additional-dark-green);
  }
}

input {
  min-height: var(--Default-Headline-3-size);
}
`;

export default GlobalStyle;
