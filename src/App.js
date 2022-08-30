import { BrowserRouter, Outlet } from "react-router-dom";
import RoutingComponent from "./routing.js";

function App() {
  return (
    <>
      <h2>App.js</h2>
      <div className="mainDiv">
        <BrowserRouter>
          <RoutingComponent />
          <Outlet />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
