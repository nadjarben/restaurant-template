import styled from "styled-components";

export const StyledCard = styled.div`
  position: relative;
  background-color: #f0f0f0;
  border-radius: 15px;
  height: 140px;
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
    margin-top: 8px;
  }

  div {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
  }
`;
