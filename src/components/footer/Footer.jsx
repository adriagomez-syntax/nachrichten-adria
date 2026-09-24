import Copyright from "./Copyright";
import MainFooter from "./main/MainFooter";
import Subscribe from "./Subscribe";

export default function Footer() {
	return (
		<footer className="flex flex-col gap-8 items-center p-4 min-h-15 bg-background-mid border-t border-background/20 text-background">
        	<Subscribe />
			<MainFooter />
			<Copyright />
		</footer>
	)
}