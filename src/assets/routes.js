import Error404Page from "../pages/Error404Page";
import GaleriePage from "../pages/GaleriePage";
import AboutPage from "../pages/AboutPage"
import HomePage from "../pages/HomePage";
import NachrichtDetailPage from "../pages/NachrichtDetailPage";
import { FaAddressCard, FaHome, FaImages } from "react-icons/fa";

export const routes = [
	{ path: "/", name: "Home", element: HomePage, navbar: true, icon: FaHome },
	{ path: "/galerie", name: "Galerie", element: GaleriePage, navbar: true, icon: FaImages },
	{ path: "/about", name: "Über uns", element: AboutPage, navbar: true, icon: FaAddressCard },
	{ path: "/nachricht/:id", name: "Nachricht", element: NachrichtDetailPage, navbar: false },
	{ path: "/*", name: "Error404", element: Error404Page, navbar: false },
]