import React from "react";
import Navbar from "./components/navbar/Navbar";
import CategoryProduct from "./components/category-product/CategoryProduct";
import CardContainer from "./components/card-container/CardContainer";

function App() {

  const [category, setCategory] = React.useState("Populars")
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <div style={{ position: "absolute", left: "10px", marginTop: "30px" }}>
          <CardContainer category={category} />
        </div>
      <div style={{ position: "fixed", right: '27vw' }}>
          <CategoryProduct setCategory={setCategory} />
        </div>
      </div>
    </div>
  );
}

export default App;
