import React from "react";
import { GlobalHistory } from "../Helper";
import { SwitchRoute } from "../Helper/SwitchRoute";
import { HomeRoutes } from "../routes/HomeRoutes/HomeRoutes";
import "./HomeLayout.Style.scss";

export const HomeLayout = () => (
  <div className="app-wrapper">
    <div className="app-header-wrapper">
      <div className="app-logo" onClick={() => GlobalHistory.push("/home")}>
        <div className="logo-text">GitHub</div>
        <div className="logo-sub-text">Jobs</div>
      </div>
    </div>
    <div className="app-container-wrapper">
      <SwitchRoute routes={HomeRoutes} />
    </div>
  </div>
);
