import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCategory } from "../../redux/actions/category.action";
import { ContainerCategory } from "./CategoryContainerstyled";

import CategoryCard from "../category-card/CategoryCard";

const CategoryContainer = () => {

  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);

  return (
    <div>
      <ContainerCategory>
        {categories.map((c, id) => (
          <div key={id} onClick={() => dispatch(changeCategory(c.name))}>
            <CategoryCard c={c} />
            <div style={{ height: "8px" }} />
          </div>
        ))}
      </ContainerCategory>
    </div>
  );
};

export default CategoryContainer;
