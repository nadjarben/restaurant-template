import styled from "styled-components";

export const StyledCard = styled.div`
  width: 30vw;
  margin-top: auto;
  margin-bottom: auto;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  height: 200px;
  position: relative;
  @media (min-width: 600px) {
    height: 250px;
    font-size: 25px;
  }
  &:hover {
    background-color: #da291c;
    color: white;
  }
  &:active {
    background-color: #da291c;
    color: white;
  }
  &:focus {
    background-color: #da291c;
    color: white;
  }

  img {
    margin-top: 5px;
    width: 80%;
    @media (min-width: 600px) {
    width: 30%;
  }
  }
  h5 {
    text-align: center;
    margin-top: 5px;
    font-size: auto;
    padding-left: 1vw;
    padding-right: 1vw;
  }

  p {
    position: absolute;
    left: 0;
    right: 0;
    bottom: -0.5vh;
    font-size: 14px;
    font-style: italic;
    margin-left: auto;
    margin-right: auto;
    width: 100px; /* Need a specific value to work */
  }
  span {
    background-color: red;
  }
`;
