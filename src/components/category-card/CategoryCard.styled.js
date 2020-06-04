import styled, { css } from "styled-components";
//#f0f0f0

const styledCard = css`
  background-color: #da291c;
  color: white;
`;

const invertedStyledCard = css`
  background-color: #F0F0F0;
  color: black;
`;

const getCardStyles = (props) => {
  if (props.reverted) {
    return invertedStyledCard;
  }
  return props.inverted ? invertedStyledCard : styledCard;
};

export const StyledCard = styled.div`
  position: relative;
  background-color: #da291c;
  color: white;
  border-radius: 15px;
  height: 140px;
  @media (min-width: 600px) {
    height: 150px;
    font-size: 25px;
  }
  img {
    margin-top: 8px;
    width: 70%;
    @media (min-width: 600px) {
    width: 20%;
  }
  }

  div {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    bottom: 0px;
    text-align: center;
  }
  ${getCardStyles}
`;

//#b0a7a7
