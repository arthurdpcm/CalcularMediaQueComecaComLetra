import styled from "styled-components";

export const Calculator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 320px;

  background: white;
  box-shadow: 10px 9px 10px -3px rgba(0,0,0,0.10);

  button {
    height: 80px;
    width: 80px;
    transition: .1s linear;
    color: var(--number);
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;

    #display {
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;

      padding: 0 20px 15px 0;

      color: var(--display_number);

      height: 110px;
      width: 100%;

      font-size: 1.5rem;
      
      background: var(--display)
    }

    #buttonsGrid {
      display: flex;
      align-items: baseline;

      #numbersGrid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
      }

      #operatorsGrid {
        display: flex;
        flex-direction: column;
      }
    }
  }

  .numbersButton {
    background-color: var(--number_buttons);
    cursor: pointer;
  }

  .numbersButton:hover {
    background-color: var(--buttons_hover);
  }

  .numbersButtonOff {
    background-color: var(--number_buttons);
  }

  .numbersButtonOff:hover {
    background: var(--number_buttons);
  }

  .operatorButton {
    background-color: var(--operator_button);
    cursor: pointer;
  }

  .operatorButton:hover {
    background-color: var(--buttons_hover);
  }

  .operatorButtonOff {
    background-color: var(--operator_button);
  }

  .submitButton {
    background: var(--display);
    cursor: pointer;
  }

  .submitButton:hover {
    filter: brightness(0.90);
  }
`
