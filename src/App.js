import "./index.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import {Coin} from "./pages/Coin";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";

function App() {
  const [coins, setCoins] = useState([]);
  const [currency, setCurrency] = useState({currency: "usd", symbol: "$"})

  return (
    <div className="App">
      <NavBar/>

      <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home coins={coins} currency={currency} setCoins={setCoins} setCurrency={setCurrency}/>}/>
        <Route path="/coin/:coinId" element={<Coin/>}/>
        <Route path="*" element={<ErrorPage/>}/>

      </Routes>
      </BrowserRouter>

      <Footer/>
      
    </div>
  );
}

export default App;
