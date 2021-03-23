import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductsItem from "./productItem";
import "./productsList.css";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";

function ProductsList() {
  const [products, setProducts] = useState(null);
  // const [sportingGoods, setSportingGoods] = useState(null);
  // const [electronics, setElectronics] = useState(null);
  // const [clothing, setClothing] = useState(null);
  const [onlyStocked, setOnlyStocked] = useState(false);

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

  const handleChange = (event) => {
    setOnlyStocked(!onlyStocked);
  };

  return (
    <div className="listContainer">
      <form>
        <label>
          <input type="text"></input>
        </label>
      </form>
      <FormControlLabel
        control={
          <Checkbox
            checked={onlyStocked}
            onChange={handleChange}
            name="In Stock Only"
          />
        }
        label="In Stock Only"
      />
      <div>
        Sporting Goods
        {products &&
          products
            .filter((product) => product.category === "Sporting Goods")
            .map((product) => (
              <div>
                <ProductsItem product={product} key={product.id} />
              </div>
            ))}
      </div>
      <div>
        Electronics
        {products &&
          products
            .filter((product) => product.category === "Electronics")
            .map((product) => (
              <div>
                <ProductsItem product={product} key={product.id} />
              </div>
            ))}
      </div>
      <div>
        Clothing
        {products &&
          products
            .filter((product) => product.category === "Clothing")
            .map((product) => (
              <div>
                <ProductsItem product={product} key={product.id} />
              </div>
            ))}
      </div>
    </div>
  );
}

export default ProductsList;
