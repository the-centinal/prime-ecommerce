import React from "react";
import Productslist from "./components/productslist";
import Header from "./components/header";
import Customers from "./components/customers";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Orders from "./components/orders";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element= {<Productslist /> } />
          <Route exact path="/customers" element= {<Customers /> }/>
          <Route exact path="/orders/:user_id" element= {<Orders /> }/>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
