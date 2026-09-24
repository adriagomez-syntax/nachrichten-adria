import { NavLink } from "react-router"
import { ROUTE_TYPE, routes } from "../../assets/routes"
import LinkAnim from "../common/LinkAnim"

export default function Navbar({ className = "" }) {
	
	const filteredRoutes = routes.filter((route) => route.type === ROUTE_TYPE.NAVBAR)
	const activeEffect = {
		background: "bg-background-dark",
		shadowEffect: "shadow-[1px_1px_0_0]",
		shadowColor: "shadow-background-dark/20"
	}
	
	return (
		<nav className={`${className} flex-1 w-full flex justify-center gap-2 font-secondary uppercase`}>
			{filteredRoutes.map((route) => (
				<LinkAnim key={ route.name } className="flex items-center">
					<NavLink to={ route.path } className={({ isActive }) => (isActive ? `${activeEffect.background} ${activeEffect.shadowEffect} ${activeEffect.shadowColor}` : `hover:${activeEffect.background} hover:${activeEffect.shadowEffect} hover:${activeEffect.shadowColor}`) + " rounded-sm px-2 py-1 text-shadow-2xs"}>
						<div>{ route.name }</div>
					</NavLink>
				</LinkAnim>
			))}
		</nav>
	)
}