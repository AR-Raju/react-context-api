import React, { useContext } from "react";
import { catagoryContex } from "../../App";

const Header = () => {
  const [catagory, setCount] = useContext(catagoryContex);
  return (
    <div>
      <h4>This is header: {catagory}</h4>
      <button onClick={() => setCount("laptop")}>Laptop</button>
      <button onClick={() => setCount("mobile")}>Mobile</button>
      <button onClick={() => setCount("camera")}>Camera</button>
    </div>
  );
};

export default Header;
