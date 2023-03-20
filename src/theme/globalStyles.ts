//import libraries:
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
${normalize}
:root {
  --background-color-app: lightblue;
}
body {
    background-color: var(--background-color-app);
}`;

export default GlobalStyle;
