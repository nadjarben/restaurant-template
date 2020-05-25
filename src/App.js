import React from "react";
import Navbar from "./components/navbar/Navbar";
import CategoryProduct from "./components/category-product/CategoryProduct";
import CardContainer from "./components/card-container/CardContainer";

function App() {

  const [category, setCategory] = React.useState("Populars")
  const [checkout, setCheckout] = React.useState([])

  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <div style={{ position: "absolute", left: "10px", marginTop: "0px" }}>
          <CardContainer category={category} checkout={checkout} setCheckout={setCheckout} />
        </div>
      <div style={{ position: "fixed", right: '27vw' }}>
          <CategoryProduct setCategory={setCategory} checkout={checkout} />
        </div>
      </div>
    </div>
  );
}

export default App;
