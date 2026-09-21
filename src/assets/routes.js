import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import NachrichtDetailPage from "../pages/NachrichtDetailPage";

export const routes = [
	{ path: "/", name: "Home", element: Home, navbar: true },
	{ path: "/nachricht/:id", name: "Nachricht", element: NachrichtDetailPage, navbar: false },
	{ path: "/*", name: "Error404", element: Error404, navbar: false },
]