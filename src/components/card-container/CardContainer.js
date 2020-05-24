import React from "react";
import { StyledDiv, TitleCategory } from "./CardContainer.styled";
import CardProduct from "../card-product/CardProduct";

import datas from "../../data.json";

const CardContainer = ({ category }) => {
  let url;
  if (process.env.NODE_ENV === "development") {
    url = "http://localhost:3000";
  } else {
    url = "https://amazing-poincare-3f19ef.netlify.app";
  }

  return (
    <div>
      <TitleCategory>{category}</TitleCategory>
      <StyledDiv>
        {datas
          .filter((data) => data.cat.includes(category))
          .map((d) => (
            <div>
              <CardProduct title={d.name} icon={`${url}/${d.icon}`} />
            </div>
          ))}
      </StyledDiv>
    </div>
  );
};

export default CardContainer;
