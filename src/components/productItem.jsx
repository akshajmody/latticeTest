import React, { useState, useEffect } from "react";
import axios from "axios";
import "./productItem.css";
import Modal from "@material-ui/core/Modal";

function ProductsItem({ product }) {
  const [inStock, setInStock] = useState("false");
  const [modalCheck, setModalCheck] = useState("false");

  // const handleOpen = () => {
  //   setModal(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <div>
      {product.inStock ? (
        <div className="productItemContainer">
          <div className="inStock">{product.name}</div>
          <div>{product.price}</div>
          <button>View Detail</button>
        </div>
      ) : (
        <div className="productItemContainer">
          <div className="outStock">{product.name}</div>
          <div>{product.price}</div>
          <button>View Detail</button>
        </div>
      )}
    </div>
  );
}

export default ProductsItem;
