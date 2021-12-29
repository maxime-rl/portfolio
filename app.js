import "./assets/style/index.css";
import {
  Navbar,
  Banner,
  InfiniteScrollBanner,
  FeaturedProjects,
  ProjectCard,
  BtnScrollToTop,
  NetworkList,
  Footer,
} from "./components";
import { HomePage } from "./pages/HomePage";

window.customElements.define("navbar-component", Navbar);
window.customElements.define("banner-component", Banner);
window.customElements.define("infinite-scroll", InfiniteScrollBanner);
window.customElements.define("project-card", ProjectCard);
window.customElements.define("featured-projects", FeaturedProjects);
window.customElements.define("btn-top", BtnScrollToTop);
window.customElements.define("network-list", NetworkList);
window.customElements.define("footer-component", Footer);

window.customElements.define("home-page", HomePage);

document.body.insertAdjacentHTML("afterbegin", "<home-page></home-page>");
