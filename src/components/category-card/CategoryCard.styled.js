import styled, { css } from "styled-components";
//#f0f0f0

const styledCard = css`
  background-color: #da291c;
  color: white;
`;

const invertedStyledCard = css`
  background-color: #b0a7a7;
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
  ${getCardStyles}
`;
