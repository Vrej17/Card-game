import React from "react";
import ReactDOM from "react-dom/client";
import CardApp from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/cardgame", element: <CardApp />, errorElement: <div>err</div> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
