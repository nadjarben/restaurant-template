import styled from "styled-components";

export const StyledCard = styled.div`
position: relative;
  background-color: #F0F0F0;
  border-radius: 15px;
  height: 140px;
  padding-bottom: 1px;
  &:hover {
    background-color: #DA291C;
    color: white;
  }
  &:active {
    background-color: #DA291C;
    color: white;
  }
  &:focus {
    background-color: #DA291C;
    color: white;
  }

  img {
      margin-top: 8px;
  }

  h5 {
    bottom: 1px;
    left: auto;
    right: auto;
  }
`;