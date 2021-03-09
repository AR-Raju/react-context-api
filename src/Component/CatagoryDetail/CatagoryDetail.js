import React, { useContext } from "react";
import { catagoryContex } from "../../App";

const CatagoryDetail = (props) => {
  console.log(props.product);
  const { name } = props.product;

  return (
    <div>
      <h4>This is your catagory Detail.</h4>
      <h5>Selected Product:{name}</h5>
    </div>
  );
};

export default CatagoryDetail;
