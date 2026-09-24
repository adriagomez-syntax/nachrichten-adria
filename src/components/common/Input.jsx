import { FaX } from "react-icons/fa6"
import Button from "./Button"

export default function Input({ type = "text", placeholder = "", value, onChange, ref, icon = null, className = "" }) {
	
	const Icon = icon
	
	function onDelete() {
		onChange("")
	}

	return (
		<div className={`min-w-0 flex items-center gap-2 justify-between text-text
		${className} rounded-sm bg-background p-2 shadow-[3px_3px_0_0] shadow-background-dark`}>
			<div className="flex-1 min-w-0 flex gap-2 items-center justify-center">
				{Icon && <Icon />}
				<input 
					className="min-w-0 flex-1"
					type={ type }
					placeholder={ placeholder }
					value={ value }
					onChange={ (event) => onChange(event.target.value) }
					ref={ ref }
				/>
			</div>
			{value &&
				<Button className="min-w-0"
					onClick={ onDelete }>
					<FaX className="text-shadow-2xs text-xs" />
				</Button>
			}
		</div>
	)
}