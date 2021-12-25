import "./assets/style/index.css";
import { Navbar } from "./components";
import { HomePage } from "./pages/HomePage";

window.customElements.define("navbar-component", Navbar);
window.customElements.define("home-page", HomePage);

document.body.insertAdjacentHTML("afterbegin", "<home-page></home-page>");
