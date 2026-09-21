import Navbar from "./Navbar";

export default function Header() {
	return (
		<header className="flex justify-center items-center p-4 h-15 bg-background-dark border-b border-background/20 text-background">
        	<Navbar/>
		</header>
	)
}