import { FaCogs, FaDesktop, FaShieldAlt, FaUniversity } from "react-icons/fa"

export default function BasisAbout() {
	
	const basis = [
		{title: "Digitale Denkmalpflege", icon: FaUniversity, text: "Restaurierung alter Spieldokumente, Bewahrung verlorener Prototypen und Interviews mit den Pionieren der Branche – von unveröffentlichten EPROM-Dumps bis zu Original-Entwicklungsnotizen." },
		{title: "Echte Hardware im Fokus", icon: FaDesktop, text: "Wir testen auf Original-CRTs, testen FPGA-Systeme und erklären Hardware-Mods für Game Boy, Amiga & Co. Keine Software-Filter können den echten Röhren-Phosphor ersetzen." },
		{title: "Unabhängiger Journalismus", icon: FaShieldAlt, text: "Keine gesponserten Pseudo-Hypes. Authentische Rezensionen, investigative Recherchen und tiefgehende historische Reportagen ohne Druck von Publishern oder Auktionshäusern." }
	]
	
	return (
		<section className="w-full flex flex-col gap-4">
			<div className="flex gap-2 items-center text-primary text-xs uppercase">
				<FaCogs />
				<h2>Grundpfeiler unserer Redaktionsarbeit</h2>
			</div>
			<div className="w-full flex flex-col md:flex-row justify-between gap-4">
				{basis.map(item => {
					
					const Icon = item.icon

					return (
						<div key={ item.title } className="flex flex-col items-center gap-2 p-4 bg-background-mid shadow-[3px_3px_0_0] shadow-background-dark rounded-sm">
							<Icon className="p-2 w-10 h-fit bg-background-dark text-background rounded-sm" />
							<h3 className="font-secondary text-2xl text-center">{ item.title }</h3>
							<p className="font-light">{ item.text }</p>
						</div>
					)
				})}
			</div>
		</section>
	)
}