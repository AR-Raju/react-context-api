import React, { useContext } from "react";
import { catagoryContex } from "../../App";
import Catagories from "../Catagories/Catagories";

const Home = () => {
  const catagory = useContext(catagoryContex);
  return (
    <div style={{ border: "1px solid lightsalmon" }}>
      <h4>This is home {catagory}</h4>
      <Catagories></Catagories>
    </div>
  );
};

export default Home;
