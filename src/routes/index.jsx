import React from "react";
import useRoutes from "../hooks/use-route";
import { Route, Routes } from "react-router-dom";
import CoreLayout from "../layout";

const Routing = () => {
  const { allRoutes } = useRoutes();

  return (
    <Routes>
      <Route path="/" element={<CoreLayout />}>
        {allRoutes.map(({ id, element: Element, ...other }) => (
          <Route index key={id} element={<Element />} {...other} />
        ))}
      </Route>
      <Route path="*" element={<p>404 | Not Found</p>} />
    </Routes>
  );
};

export default Routing;
