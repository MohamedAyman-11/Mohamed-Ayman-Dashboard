import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "./RootLayout";
import Dashboard from "./Dashboard";
import Customers from "./Customers";
import Products from "./Products";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="Products" element={<Products />} />
      <Route path="Customers" element={<Customers />} />
    </Route>,
  ),
);
