import { Outlet } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
