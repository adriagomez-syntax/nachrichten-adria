import Error404Page from "../pages/Error404Page";
import GaleriePage from "../pages/GaleriePage";
import AboutPage from "../pages/AboutPage"
import HomePage from "../pages/HomePage";
import NachrichtDetailPage from "../pages/NachrichtDetailPage";

export const routes = [
	{ path: "/", name: "Home", element: HomePage, navbar: true },
	{ path: "/galerie", name: "Galerie", element: GaleriePage, navbar: true },
	{ path: "/about", name: "Über uns", element: AboutPage, navbar: true },
	{ path: "/nachricht/:id", name: "Nachricht", element: NachrichtDetailPage, navbar: false },
	{ path: "/*", name: "Error404", element: Error404Page, navbar: false },
]