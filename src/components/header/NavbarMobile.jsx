import { NavLink } from "react-router"
import { routes } from "../../assets/routes"
import LinkAnim from "../common/LinkAnim"

export default function NavbarMobile() {
	
	const filteredRoutes = routes.filter((route) => route.navbar)
	
	return (
		<nav className="flex flex-col gap-2">
			{filteredRoutes.map(route => {
				
				const Icon = route.icon
				
				return (
					<LinkAnim key={ route.name }>
						<NavLink to={ route.path } 
							className={({ isActive }) => (isActive ? "bg-background-dark" : "bg-background-dark/10") 
								+ " flex gap-3 items-center p-4 font-secondary text-lg rounded-sm transition duration-300"
								+ " shadow-[1px_1px_0_0] shadow-background-dark/20"
							}
						>
							{Icon && <Icon />}
							<h2>{route.name}</h2>
						</NavLink>
					</LinkAnim>
				)
			})}
		</nav>
	)
}