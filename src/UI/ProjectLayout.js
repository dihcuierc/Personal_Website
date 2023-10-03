import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import background from "./Background.module.css";

export default function RootLayout() {
  return (
    <div className={background.project}>
      <NavBar />
      <Outlet />
    </div>
  );
}
