import React, { useContext } from "react";
import { catagoryContex } from "../../App";

const Shipment = () => {
  const [catagory, setCatagory] = useContext(catagoryContex);
  return (
    <div>
      <h4>This is shipment</h4>
      <button onClick={() => setCatagory(catagory + 1)}>
        Increment from catagory
      </button>
    </div>
  );
};

export default Shipment;
