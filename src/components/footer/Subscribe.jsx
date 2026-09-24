import { FaRegEnvelope } from "react-icons/fa";
import Input from "../common/Input";
import ButtonPrimary from "../common/ButtonPrimary";
import { useRef, useState } from "react";

export default function Subscribe() {
	
	const emailRef = useRef(null)
	const [errorMsg, setErrorMsg] = useState("")

	function onSubmit(event) {
		event.preventDefault()

		const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g
		if (!emailRef.current.value.match(emailRegex)) {
			emailRef.current.focus()
			setErrorMsg("Ungültig E-Mail-Format!")
			return
		}

		console.log(`${emailRef.current.value} aboniert!`)
	}
	
	return (
		<section className="mt-4 p-4 flex flex-col md:w-2/3 md:flex-row gap-4 justify-between bg-background-dark/10 shadow-[1px_1px_0_0] shadow-background-dark/20">
			<div className="flex gap-4 items-center">
				<FaRegEnvelope className="w-15 h-fit p-2 bg-background-dark shadow-[1px_1px_0_0] shadow-background-dark rounded-sm text-shadow-2xs" />
				<div className="flex flex-col gap-1">
					<h1 className="text-primary font-secondary text-lg">Newsletter abonnieren</h1>
					<p className="text-xs">Wöchentliche Klassiker-Chroniken, Modding-Tipps und Exklusivberichte direkt ins Postfach.</p>
				</div>
			</div>
			<form onSubmit={ onSubmit } className="flex flex-col gap-4 md:flex-row items-center">
				<div className="w-full flex flex-col gap-2">
					<Input type="email" className="w-full" ref={ emailRef } />
					{errorMsg && 
						<p className="text-2xs text-primary">
							{ errorMsg }
						</p>
					}
				</div>
				<ButtonPrimary type="submit" className="flex justify-center h-9">
					Abonieren
				</ButtonPrimary>
			</form>
		</section>
	)
}