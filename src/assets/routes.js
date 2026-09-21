import Error404 from "../pages/Error404";
import Home from "../pages/Home";

export const routes = [
	{ path: "/", name: "Home", element: Home, navbar: true },
	{ path: "/*", name: "Error404", element: Error404, navbar: false }
]