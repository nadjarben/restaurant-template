import styled from "styled-components";

export const StyledCard = styled.div`
position: relative;
  margin-top: auto;
  margin-bottom: auto;
  text-align: center;
  background-color: #F0F0F0;
  border-radius: 10px;
  height: 100px;
  &:hover {
    background-color: red;
    color: yellow;
  }

  img {
      margin-top: 5px;
  }

  h5 {
  text-align: center;
  margin-top: 15px;
  }
`;