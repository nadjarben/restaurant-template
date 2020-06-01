import React from "react";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";
import Navbar from "./components/navbar/Navbar";
import CategoryContainer from "./components/category-container/CategoryContainer"
import CardContainer from "./components/card-container/CardContainer";

function App() {
  const [category, setCategory] = React.useState("Populaires");
  const [checkout, setCheckout] = React.useState([]);

  return (
    <Provider store={store}>
      <Navbar />
      <div style={{ position: "absolute", left: "10px", marginTop: "0px" }}>
        <CardContainer
          category={category}
          checkout={checkout}
          setCheckout={setCheckout}
        />
      </div>
      <div style={{ position: "fixed", right: "27vw" }}>
        <CategoryContainer setCategory={setCategory} checkout={checkout} />
      </div>
    </Provider>
  );
}

export default App;
