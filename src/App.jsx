import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Home from "./pages/products/Products";
import NoPage from "./pages/NoPage/NoPage";
import Selected from "./pages/Selected/Selected";
import Product from "./pages/products/Product";
import ServiceRequirements from "./pages/service-requirements/ServiceRequirements";
import Contacts from "./pages/contacts/Contacts";
import Ordering from "./pages/ordering/Ordering";
import Ordered from "./pages/Ordered/Ordered";


export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />

        <Route path="/product" element={<Product />} />
        <Route path="/selected" element={<Selected />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/ordering" element={<Ordering />} />
        <Route path="ordered" element={<Ordered />} />
        <Route path="/service-requirements" element={<ServiceRequirements />} />
        <Route path="*" element={<NoPage />} />
      </Routes>

   
    </div>
  );
}
