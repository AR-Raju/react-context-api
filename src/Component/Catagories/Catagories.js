import React, { useContext, useEffect, useState } from "react";
import { catagoryContex } from "../../App";
import CatagoryDetail from "../CatagoryDetail/CatagoryDetail";

const allProducts = [
  { name: "Lenovo", catagory: "Laptop" },
  { name: "Asus", catagory: "Laptop" },
  { name: "Dell", catagory: "Laptop" },
  { name: "Samsung", catagory: "Mobile" },
  { name: "Redmi", catagory: "Mobile" },
  { name: "Apple", catagory: "Mobile" },
  { name: "Canon", catagory: "Camera" },
  { name: "Nikkon", catagory: "Camera" },
  { name: "Sony", catagory: "Camera" },
];

const Catagories = () => {
  const [catagory] = useContext(catagoryContex);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const matchProducts = allProducts.filter(
      (pd) => pd.catagory.toLowerCase() === catagory.toLowerCase()
    );
    console.log(matchProducts);
    setProducts(matchProducts);
  }, [catagory]);
  return (
    <div>
      <h3>Select your catagory: {catagory}.</h3>
      {products.map((pd) => (
        <CatagoryDetail product={pd}></CatagoryDetail>
      ))}
    </div>
  );
};

export default Catagories;
