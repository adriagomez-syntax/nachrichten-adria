import { NavLink } from "react-router"
import { routes } from "../../assets/routes"

export default function Navbar() {
	
	const filteredRoutes = routes.filter((route) => route.navbar)
	
	return (
		<nav className="flex gap-2">
			{filteredRoutes.map((route) => (
				<NavLink key={ route.name } to={ route.path } className="hover:underline">
					<div>{ route.name }</div>
				</NavLink>
			))}
		</nav>
	)
}