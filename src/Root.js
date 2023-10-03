import { Outlet } from "react-router-dom";
import NavBar from "./UI/NavBar";
import background from "./Background.module.css";

export default function RootLayout() {
  return (
    <div className={background.main}>
      <NavBar />
      <Outlet />
    </div>
  );
}
