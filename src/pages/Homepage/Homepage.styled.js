import styled from "styled-components";

export const ForegroundStyled = styled.div`
  height: 60vh;
  background-color: black;
  background: rgba(0, 0, 0, 0.55);
  font-family: "Lobster", cursive;

  .div-logo {
  position: absolute;
  top: 15px;
  left: 15px;
}

  .language {
    position: absolute;
    right: 10px;
    top: 10px;
  }
  
  .title {
    color: white;
    opacity: 0.7;
    position: absolute;
    top: 7vh;
    font-size: 30px;
    width: 100%;
    display: flex;
    align-items: center; /** Y-axis align **/
    justify-content: center; /** X-axis align **/
  }
`;

export const DivButtonsStyled = styled.div`
  opacity: 0.9;
  background-color: black;
  color: white;
  height: 35vh;
  display: table-cell;
  vertical-align: middle;
  width: 100vw;

  .descri {
    font-size: 14px;
    font-family: "Lobster", cursive;
    flex-wrap: wrap;
    text-align: center;
    padding: 0 5vw 5% 5vw;
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    cursor: pointer;
    color: white;
    font-weight: bold;
    border-color: black;
    border-radius: 10%;
    padding: 20px;
    background-color: #da291c;
    width: 150px;
  }
`;

