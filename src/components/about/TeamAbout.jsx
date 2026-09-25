import { FaUserFriends } from "react-icons/fa";

export default function TeamAbout() {
	
	const workers = [
		{ name: "Markus Becker", title: "Chefredakteur & SNES/16-Bit Spezialist", description: "Gründete RetroPixel 2018 aus Leidenschaft für Mode 7 Grafik und unberührte japanische Rollenspiele. Verbringt freie Samstage mit RGB-Scart-Kabelbäumen und Framemeister-Messungen.", email: "m.becker@retropixel.de", joined: 2018, img: "/team/Markus.jpg" },
		{ name: "Sarah Lindner", title: "Hardware-Restauratorin & Arcade-Liebhaberin", description: "Elektroingenieurin mit Vorliebe für verstaubte JAMMA-Platinen und Kondensator-Recapping. Hat bisher über 120 Game Boy Displays gerettet und betreibt zwei originale Candy Cabs im Redaktionsraum.", email: "s.lindner@retropixel.de", joined: 2019, img: "/team/Sarah.jpg" },
		{ name: "Adria Gomez", title: "Handheld-Kurator & Chiptune-Musiker", description: " Komponiert Chiptunes auf modifizierten DMG-01 mit Little Sound Dj (LSDJ). Kennt jede Revision des Game Boy Classic und betreut unsere wöchentlichen Soundchip-Analysen (YM2612 & SID).", email: "a.gomez@retropixel.de", joined: 2021, img: "/team/Adria.jpg" },
	]
	
	return (
		<section className="flex flex-col gap-4">
			<div className="flex gap-2 items-center text-primary text-xs uppercase">
				<FaUserFriends />
				<h2>Die Redaktion hinter RetroPixel</h2>
			</div>
			<div className="flex flex-col gap-4 justify-between md:flex-row">
				{workers.map(item => {
					return (
						<div key={ item.name } className="flex flex-col gap-2 bg-background-mid shadow-[3px_3px_0_0] shadow-background-dark rounded-sm">
							<div className="overflow-hidden rounded-sm">
								<img src={ item.img } className="hover:transform hover:scale-105" />
							</div>
							<div className="h-45 flex flex-col justify-between gap-2 p-4">
								<div className="flex flex-col gap-1">
									<h2 className="font-secondary text-xl text-primary">{ item.name }</h2>
									<span className="font-secondary text-2xs tracking-widest text-primary">{ item.title }</span>
									<p className="text-xs">{ item.description }</p>
								</div>
								<div className="flex justify-between gap-2 text-2xs">
									<div className="flex gap-1 items-center">
										<p className="text-secondary">•</p>
										<p>Active seit { item.joined }</p>
									</div>
									<p>{ item.email }</p>
								</div>
							</div>
						</div>
					)
				})}
			</div>
		</section>
	)
}