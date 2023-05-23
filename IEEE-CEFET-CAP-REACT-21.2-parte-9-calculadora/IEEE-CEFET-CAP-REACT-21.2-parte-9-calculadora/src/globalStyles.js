import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-size: 1.3rem;
  }

  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--page_background);
    padding: 50px;
  }

  :root {
    --page_background: linear-gradient(45deg, #1b212c 0%, #32316b 100%);
  
    --display: linear-gradient(45deg, #364873 0%, #9899BD 100%);
    --display_number: #ffffff;

    --number: #000000;
    --number_buttons: #ffffff;
    --operator_button: #e0e0e0;
    --buttons_hover: #5a75b8;
  }
`;
