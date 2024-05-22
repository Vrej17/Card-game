import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Blotgame from "./blotgame.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Blotgame/>, errorElement: <div>err</div> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
