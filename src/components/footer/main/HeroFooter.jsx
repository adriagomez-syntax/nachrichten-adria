import Logo from "../../header/Logo";

export default function HeroFooter() {
	return (
		<div className="hidden w-2/3 md:flex flex-col gap-2">
			<Logo />
			<p>Das führende redaktionelle Online-Archiv und News-Portal für historische Videospiele, Modding-Kultur und Konsolen-Historie im deutschsprachigen Raum.</p>
		</div>
	)
}