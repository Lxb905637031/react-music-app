import React, { memo } from "react";
import { renderRoutes } from "react-router-config";
import { BrowserRouter as Router } from "react-router-dom";

import routes from "@/router";

import LxbAppHeader from "@/components/app-header";
import LxbAppFooter from "@/components/app-footer";

const LxbMain = memo(() => {
  return (
    <Router>
      <LxbAppHeader />
      {renderRoutes(routes)}
      <LxbAppFooter />
    </Router>
  );
});

export default LxbMain;
