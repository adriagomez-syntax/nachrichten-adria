import { FiMenu } from "react-icons/fi";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Search from "./Search";
import ButtonPrimary from "../common/ButtonPrimary";
import { useState } from "react";
import SidebarMenu from "./SidebarMenu";

export default function Header() {
	
	const [openNavMenu, setOpenNavMenu] = useState(false)
	
	return (
		<header className="flex justify-between items-center gap-2 p-4 h-15 bg-background-mid border-b border-background/20 text-background">
        	<Logo />
			<Navbar className="hidden md:flex" />
			<Search className="hidden md:flex" />
			<ButtonPrimary 
				className="h-full md:hidden"
				onClick={ () => setOpenNavMenu(true) }>
				<FiMenu />
			</ButtonPrimary>
			<SidebarMenu open={ openNavMenu } setOpen={ setOpenNavMenu } />
		</header>
	)
}