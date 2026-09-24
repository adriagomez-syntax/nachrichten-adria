import Error404Page from "../pages/Error404Page";
import GaleriePage from "../pages/GaleriePage";
import AboutPage from "../pages/AboutPage"
import HomePage from "../pages/HomePage";
import NachrichtDetailPage from "../pages/NachrichtDetailPage";
import LegalPage from "../pages/LegalPage";
import DataProtectionPage from "../pages/DataProtectionPage"
import CookiesPage from "../pages/CookiesPage"
import TermsPage from "../pages/TermsPage"
import { FaAddressCard, FaHome, FaImages } from "react-icons/fa";

export const ROUTE_TYPE = {
	NAVBAR: 0,
	LEGAL: 1,
	OTHER: 2
}

export const routes = [
	{ path: "/", name: "Home", element: HomePage, type: ROUTE_TYPE.NAVBAR, icon: FaHome },
	{ path: "/galerie", name: "Galerie", element: GaleriePage, type: ROUTE_TYPE.NAVBAR, icon: FaImages },
	{ path: "/about", name: "Über uns", element: AboutPage, type: ROUTE_TYPE.NAVBAR, icon: FaAddressCard },
	{ path: "/legal", name: "Impressum", element: LegalPage, type: ROUTE_TYPE.LEGAL },
	{ path: "/data-protection", name: "Datenschutz", element: DataProtectionPage, type: ROUTE_TYPE.LEGAL },
	{ path: "/terms", name: "AGB", element: TermsPage, type: ROUTE_TYPE.LEGAL },
	{ path: "/cookies", name: "Cookies", element: CookiesPage, type: ROUTE_TYPE.LEGAL },
	{ path: "/nachricht/:id", name: "Nachricht", element: NachrichtDetailPage, type: ROUTE_TYPE.OTHER },
	{ path: "/*", name: "Error404", element: Error404Page, type: ROUTE_TYPE.OTHER },
]