import "./assets/style/index.css";
import { Navbar, FeaturedProjects, ProjectCard } from "./components";
import { HomePage } from "./pages/HomePage";

window.customElements.define("navbar-component", Navbar);
window.customElements.define("project-card", ProjectCard);
window.customElements.define("featured-projects", FeaturedProjects);
window.customElements.define("home-page", HomePage);

document.body.insertAdjacentHTML("afterbegin", "<home-page></home-page>");
