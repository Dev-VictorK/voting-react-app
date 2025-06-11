import react from "react";
import reactDom from "react-dom/client";
import './App';
import ProductList from "./App";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

const root = reactDom.createRoot(document.getElementById('root'));
root.render(
  <react.StrictMode>
    <ProductList />
  </react.StrictMode>
)