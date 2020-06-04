import styled from "styled-components";

export const ForegroundStyled = styled.div`
  height: 65vh;
  background-color: black;
  background: rgba(0, 0, 0, 0.55);

  .language {
      position: absolute;
      right: 10px;
      top: 10px;
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
    position: absolute;
    justify-content: space-between;
    display: flex;
    bottom: 4%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
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
`;
