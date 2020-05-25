import React from 'react'
import { ContainerCategory } from './CategoryProduct.styled'
import Divider from "@material-ui/core/Divider";


import CategoryCard from '../category-card/CategoryCard';
import CardTotal from "../card-total/CardTotal";
import data from '../../category.json';

const CategoryProduct = ({ setCategory, checkout }) => {

    let url;
  if (process.env.NODE_ENV === "development") {
    url = "http://localhost:3000";
  } else {
    url = "https://amazing-poincare-3f19ef.netlify.app";
  }

    return (
        <div>
            <ContainerCategory>
              <div onClick={() => setCategory("Panier")}>
            <CardTotal checkout={checkout} />
            </div>
            <Divider light  style={{marginTop: '5px', marginBottom: '5px'}} />
            {data.map((d, id) => (
              <div key={id} onClick={() => setCategory(d.name)}>
                  <CategoryCard title={d.name} icon={`${url}/${d.icon}`} />
                  <div style={{height: '8px'}} />
              </div>
            ))}
            </ContainerCategory>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export default CategoryProduct;
