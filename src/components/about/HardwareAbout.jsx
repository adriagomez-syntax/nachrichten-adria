import { FaBookOpen, FaLaptopCode, FaMicrochip } from "react-icons/fa";
import { FaRegFloppyDisk } from "react-icons/fa6";

export default function HardwareAbout() {
	
	const material = [
		{ id: "Physische Datenträger", icon: FaRegFloppyDisk, title: "Module in der Sammlung", value: "1.200+", details: "NES, Famicom, Mega Drive, Game Boy & Neo-Geo MVS Module, alle gedumpt und trocken gelagert." },
		{ id: "Phosphor-Monitore", icon: FaLaptopCode, title: "Röhren im Dauerbetrieb", value: "28", details: "Sony Trinitron PVMs, BVM Studio-Monitore und Commodore 1084S für kalibrierte Messungen." },
		{ id: "Print-Dokumentation", icon: FaBookOpen, title: "Archivierte Magazine", value: "450+", details: "ASM, Power Play, Video Games, Club Nintendo und japanische Famitsu-Ausgaben ab 1986." }
	]
	
	return (
		<section className="flex flex-col gap-4">
			<div className="flex gap-2 items-center text-primary text-xs uppercase">
				<FaMicrochip />
				<h2>Hardware-Archiv & Labor</h2>
			</div>
			<div className="flex flex-col gap-4 p-4 bg-background-mid shadow-[3px_3px_0_0] shadow-background-dark rounded-sm">
				<h1 className="font-secondary text-2xl">Zahlen aus unserem Maschinenraum</h1>
				<div className="flex flex-col gap-4 md:flex-row">
					{material.map(item => {
						
						const Icon = item.icon
						
						return (
							<div 
								key={ item.id }
								className="flex flex-col gap-2 p-4 bg-background rounded-sm"
							>
								<div className="flex justify-between gap-2">
									<span className="text-2xs uppercase">{ item.id }</span>
									<Icon />
								</div>
								<h1 className="font-bold text-primary text-2xl">{ item.value }</h1>
								<p className="font-bold">{ item.title }</p>
								<p className="font-light text-xs">{ item.details }</p>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}