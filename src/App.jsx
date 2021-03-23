import React, { useState, useEffect } from "react";
import ProductsList from "./components/productsList";
import axios from "axios";

function App() {
  const [products, setProducts] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios
      .get("https://lattice.com/products")
      .then((response) => {
        console.log(response);
        const info = response.data;
        setProducts(info);
        console.log(info);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (event) => {};

  return (
    <div>
      <h2 className="App">Products</h2>
      <ProductsList />
    </div>
  );
}

export default App;
