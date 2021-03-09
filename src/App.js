import { createContext, useState } from "react";
import "./App.css";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Shipment from "./Component/Shipment/Shipment";

export const catagoryContex = createContext();

function App() {
  const [catagory, setCatagory] = useState("");
  return (
    <div>
      <catagoryContex.Provider value={[catagory, setCatagory]}>
        <Header></Header>
        <Home></Home>
        <Shipment></Shipment>
      </catagoryContex.Provider>
    </div>
  );
}

export default App;
