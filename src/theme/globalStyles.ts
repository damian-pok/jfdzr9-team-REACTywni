//import libraries:
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

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
    --lime-yellow: #E1F465;
    --dark-lime-yellow: #bacc46;
    --black: #040403;
    --white-color: #fff;

  //global color styles - dark mode:
    // Here will be defined colors for dark mode

  //light/dark mode colors:
    // Here will be place for light/dark mode

  //global font sizes:
  --Default-Headline-1-size: 2.5rem;
  --Default-Headline-2-size: 2rem;
  --Default-Headline-3-size: 1.5rem;
  --Default-Body-size: 1rem;
  --Default-Signatures-size: 0.75rem;

   //import font style:
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;

  //global font style:
  max-width: 1440px;
  color: var(--black);
  line-height: 1.8;
}

*{
  margin: 0;
  padding: 0;
}

html{
    width: auto;
}

body {
  background-color: var(--very-light-color);
  display: flex;
}

.root{
    min-width: 100vh;
}


h1 {
  font-size: var(--Default-Headline-1-size);
}

a {
  color: var(--dark-grey-color);
  text-decoration: none;
  :hover{
    color: var(--light-grey-color);
  }
}

input {
  min-height: var(--Default-Headline-3-size);
}
`;

export default GlobalStyle;
