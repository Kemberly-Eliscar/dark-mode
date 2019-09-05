import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";


import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import "./styles.scss";

// Imported the useLocalStorage
import useLocalStorage from './components/Hooks/useLocalStorage';

//
const App = () => {
  const [coinData, setCoinData] = useState([]);

  // I can use this to see if it works 
  const [local, setLocal] = useLocalStorage('')

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Charts coinData={coinData} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
