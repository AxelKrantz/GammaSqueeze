import { Route, Routes } from "react-router-dom";
import FrontPageComponent from "./UI/frontpage";

export default function RoutingComponent() {
  return (
    <>
      <p>RoutingComponent</p>
      <Routes>
        <Route path="" element={<FrontPageComponent />} />
      </Routes>
    </>
  );
}
