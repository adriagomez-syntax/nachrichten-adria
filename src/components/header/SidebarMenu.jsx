import NavbarMobile from "./NavbarMobile";
import Search from "./Search";

export default function SidebarMenu({ open, setOpen }) {
	return (
		<div className={(open ? "visible opacity-100" : "invisible opacity-0") + " fixed inset-0 z-100 transition"}>
			<div className="absolute inset-0 bg-black/30" onClick={ () => setOpen(false) } />
			<div className={`${open ? "translate-x-0" : "translate-x-full"} top-0 right-0 h-full w-[60vw] absolute p-6 flex flex-col gap-4 transform transition-transform ease-in-out duration-300 bg-background-mid`}>
				<div className="flex flex-col gap-6 h-full">
					<Search />
					<div className="flex flex-col gap-4">
						<h2 className="text-light uppercase font-secondary italic tracking-widest text-xs">// Hauptmenü</h2>
						<NavbarMobile />
					</div>
				</div>
			</div>
		</div>
	)
}