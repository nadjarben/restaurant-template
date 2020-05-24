import React from 'react'
import { ContainerCategory, TitleCategory } from './CategoryProduct.styled'

import CategoryCard from '../category-card/CategoryCard';
import data from '../../category.json';

const CategoryProduct = ({ setCategory }) => {

    let url;
  if (process.env.NODE_ENV === "development") {
    url = "http://localhost:3000";
  } else {
    url = "https://amazing-poincare-3f19ef.netlify.app";
  }

    return (
        <div>
            <ContainerCategory>
            <TitleCategory>Categories</TitleCategory>
            {data.map((d, id) => (
              <div key={id} onClick={() => setCategory(d.name)}>
                  <CategoryCard title={d.name} icon={`${url}/${d.icon}`} />
                  <div style={{height: '8px'}} />
              </div>
            ))}
            </ContainerCategory>
        </div>
    )
}

export default CategoryProduct;
