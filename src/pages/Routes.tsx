/** @jsxImportSource react **/
import { Routes as ReactRoutes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { About } from "../pages/About";

export function Routes() {
  return (
    <ReactRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </ReactRoutes>
  );
}