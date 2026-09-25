import BasisAbout from "../components/about/BasisAbout";
import HardwareAbout from "../components/about/HardwareAbout";
import TeamAbout from "../components/about/TeamAbout";
import Main from "../components/common/Main";

export default function AboutPage() {
	return (
		<Main className="flex flex-col gap-8">
			<div className="flex flex-col gap-2">
				<h1 className="font-bold text-primary text-3xl">Über RetroPixel</h1>
				<h2 className="text-secondary">Wir bewahren die Geschichte des digitalen Spiels. Seit 2018 berichten wir unabhängig, fundiert und mit echter Nerd-Begeisterung über die Meisterwerke der 8-Bit- bis 32-Bit-Ära.</h2>
			</div>
			<BasisAbout />
			<HardwareAbout />
			<TeamAbout />
		</Main>
	)
}