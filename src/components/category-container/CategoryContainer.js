import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCategory } from "../../redux/actions/category.action";
import { ContainerCategory } from "./CategoryContainerstyled";

import CategoryCard from "../category-card/CategoryCard";

const CategoryContainer = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);

  let url;
  if (process.env.NODE_ENV === "development") {
    url = "http://localhost:3000";
  } else {
    url = "https://amazing-poincare-3f19ef.netlify.app";
  }

  return (
    <div>
      <ContainerCategory>
        {categories.map((d, id) => (
          <div key={id} onClick={() => dispatch(changeCategory(d.name))}>
            <CategoryCard title={d.name} icon={`${url}/${d.icon}`} />
            <div style={{ height: "8px" }} />
          </div>
        ))}
      </ContainerCategory>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default CategoryContainer;
