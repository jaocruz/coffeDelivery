import { Routes, Route } from "react-router-dom";

import { DefaultLayout } from "./layouts/DefaultLayout";

import { Home } from "./pages/home";
import { Checkout } from "./pages/checkout";
import { Delivery } from "./pages/delivery";

export function Router(){
   return(
      <Routes>
         <Route path="/" element={<DefaultLayout/>} >
            <Route path="/" element={<Home/>} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="/delivery" element={<Delivery/>} />
         </Route>
      </Routes>
   )
}