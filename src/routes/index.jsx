import React from "react";
import useRoutes from "../hooks/use-route";
import { Route, Routes } from "react-router-dom";
import WithAuth from "../layout/auth-layout";
import WithUser from "../layout/private-layout";

const Routing = () => {
  const { authRoutes, privateRoutes } = useRoutes();

  return (
    <Routes>
      {/* Auth routes */}
      <Route element={<WithAuth />}>
        {authRoutes.map(({ id, element: Component, path, ...otherData }) => (
          <Route key={id} path={path} element={<Component />} {...otherData} />
        ))}
      </Route>

      {/* Private routes */}
      <Route element={<WithUser />}>
        {privateRoutes.map(({ id, element: Component, path, ...otherData }) => (
          <Route key={id} path={path} element={<Component />} {...otherData} />
        ))}
      </Route>
      
      {/* 404 route */}
      <Route path="*" element={<p>404 | Not Found</p>} />
    </Routes>
  );
};

export default Routing;
