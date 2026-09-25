import { FaHandHoldingHeart } from "react-icons/fa";
import Button from "../common/Button";

export default function DonationAbout() {
	
	function openLink() {
		window.open("https://paypal.com", "_blank")
	}
	
	return (
		<section className="flex flex-col md:flex-row md:justify-between p-4 gap-4 items-center bg-background-dark shadow-[3px_3px_0_0] shadow-background-dark rounded-sm">
			<div className="min-w-0 inset-0 flex-1 flex flex-col gap-2">
				<h1 className="font-secondary text-secondary text-center md:text-left text-xl">Unterstütze uns!</h1>
				<p className="text-background text-xs">Liebst du klassische Videospiele genauso wie wir? Mit deiner Spende hilfst du uns, weiterhin spannende Artikel, Hintergrundgeschichten und Neuigkeiten aus der Welt der Retro-Games zu veröffentlichen. Jeder Beitrag, egal wie klein, trägt dazu bei, diese besondere Gaming-Kultur lebendig zu halten. Vielen Dank für deine Unterstützung!</p>
			</div>
			<Button 
				className="w-full md:w-1/3 h-fit flex gap-2 items-center py-2 px-4 text-background justify-center bg-primary shadow-[1px_1px_0_0] shadow-background-mid text-shadow-2xs rounded-sm"
				onClick={() => openLink()}
			>
				<FaHandHoldingHeart className="w-5 h-fit" />
				<p>
					Archiv-Spende einreichen
				</p>
			</Button>
		</section>
	)
}