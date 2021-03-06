import "./assets/index.css";
import {
  Navbar,
  Header,
  InfiniteScrollBanner,
  FeaturedProjects,
  ProjectCard,
  Modal,
  BtnScrollToTop,
  NetworkList,
  Footer,
  ThemeToggle,
} from "./components";
import { HomePage } from "./pages/HomePage";

window.customElements.define("navbar-component", Navbar);
window.customElements.define("header-component", Header);
window.customElements.define("infinite-scroll", InfiniteScrollBanner);
window.customElements.define("project-card", ProjectCard);
window.customElements.define("modal-component", Modal);
window.customElements.define("featured-projects", FeaturedProjects);
window.customElements.define("btn-top", BtnScrollToTop);
window.customElements.define("network-list", NetworkList);
window.customElements.define("footer-component", Footer);
window.customElements.define("theme-toggle", ThemeToggle);
window.customElements.define("home-page", HomePage);
