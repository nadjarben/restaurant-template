import styled from "styled-components";

export const ForegroundStyled = styled.div`
  height: 65vh;
  background-color: black;
  background: rgba(0, 0, 0, 0.55);
  font-family: "Lobster", cursive;

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
  background-color: black;
  height: 30vh;
  opacity: 0.9;
  color: white;

  button {
    color: white;
    font-weight: bold;
    border-color: black;
    border-radius: 10%;
    padding: 20px;
    background-color: #da291c;
    width: 150px;
  }
  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5vh;
  }
`;

export const LogoContainerStyled = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
`;

export const DivExplanation = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 5vh 5vw 0 5vw;
  font-size: 14px;
  font-family: "Lobster", cursive;
`;
