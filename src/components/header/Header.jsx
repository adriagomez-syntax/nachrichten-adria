import Logo from "./Logo";
import Navbar from "./Navbar";
import Search from "./Search";

export default function Header() {
	return (
		<header className="flex justify-between items-center gap-2 p-4 h-15 bg-background-mid border-b border-background/20 text-background">
        	<Logo />
			<Navbar/>
			<Search />
		</header>
	)
}