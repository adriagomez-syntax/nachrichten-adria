import { Link } from "react-router"
import { ROUTE_TYPE, routes } from "../../../assets/routes"
import LinkAnim from "../../common/LinkAnim"

export default function LinksFooter() {
	
	const navLinks = routes.filter(route => route.type === ROUTE_TYPE.NAVBAR)
	const legalLinks = routes.filter(route => route.type === ROUTE_TYPE.LEGAL)

	return (
		<div className="flex flex-col gap-4 md:flex-row md:justify-center md:gap-8 md:text-xs">
			<div className="flex flex-col gap-2 items-center md:items-start">
				<h2 className="hidden md:flex uppercase font-secondary tracking-widest text-primary">Redaktion</h2>
				<ul className="flex gap-4 text-primary md:flex-col md:gap-1 md:text-inherit">
					{navLinks.map(route => {
						
						const Icon = route.icon
						
						return (
							<Link to={ route.path }>
								<li 
									key={ route.name } 
									className="p-2 border border-primary hover:bg-background-dark hover:text-background rounded-sm transition duration-300 md:p-0 md:border-0 md:hover:underline md:hover:bg-transparent md:hover:text-inherit"
									title={ route.name }
								>
									{Icon && 
										<LinkAnim className="md:hidden">
											<Icon />
										</LinkAnim>
									}
									<p className="hidden md:flex">{ route.name }</p>
								</li>
							</Link>
						)
					})}
				</ul>
			</div>
			<div className="flex flex-col gap-2">
				<h2 className="hidden md:flex uppercase font-secondary tracking-widest text-primary">Rechtliches</h2>
				<ul className="flex gap-3 text-primary text-xs justify-center md:justify-start md:flex-col md:gap-1 md:text-inherit">
					{legalLinks.map((route, index) => (
						<div key={ route.name } className="flex gap-3">
							<li className="hover:underline">
								<Link to={ route.path }>
									<p>{ route.name }</p>
								</Link>
							</li>
							{index < legalLinks.length - 1 &&
								<p className="md:hidden">■</p>
							}
						</div>
					))}
				</ul>
			</div>
		</div>
	)
}