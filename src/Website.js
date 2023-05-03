import ColorSchemesExample from './components/Navbar';
import background from "./components/Background.module.css"

export default function Main() {
  return (
    <div className={background.default}>
      <ColorSchemesExample/>
    </div>
  );
}