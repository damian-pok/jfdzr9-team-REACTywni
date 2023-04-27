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
  
  
  //global color styles - light mode:
    // Here will be defined colors for light mode
    --primary-green: #1AD079;
    --primary-dark-navy: #07133B;
    --secondary-very-light-grey: #F8F9FB;
    --secondary-light-grey: #F3F3F6;
    --secoundary-grey: #C2D1D9;
    --secoundary-white: #fff;
    //Hover Color
    --additional-dark-green: #17b66a;
    --additional-navy: #091849;

  //global color styles - dark mode:
    // Here will be defined colors for dark mode
    --primary-very-dark-navy: #141419;
    --primary-very-dark-grey: #191a21;
   
    //Hover Color
    --additional-dark-green: #17b66a;
    --additional-navy: #091849;

  //light/dark mode colors:
   --background-app: ${({ theme }: { theme: Theme }) => theme.backgroundBody};

  //global font sizes:
  --Default-Headline-1-size: 2.5rem;
  --Default-Headline-2-size: 2rem;
  --Default-Headline-3-size: 1.5rem;
  --Default-Headline-4-size: 1.2rem;
  --Default-Body-size: 1rem;
  --Default-Signatures-size: 0.75rem;
  --Default-Body-width: 83.25rem;
  --Default-Distanse-beetween-sections: 5.62rem;

   //import font style:
  font-family: 'Poppins', system-ui, Avenir, Helvetica, Arial, sans-serif;

  //global font style:
  color: var(--primary-dark-navy);
  line-height: 1.8;
  background-color: var(--secondary-very-light-grey);
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
  width: 1440px;
  margin: 2rem;
  background-color: var(--very-light-color);
  display: flex;
  justify-content: center;
  min-width: 840px;
}

.root{
    
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
