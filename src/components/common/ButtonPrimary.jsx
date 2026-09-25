import Button from "./Button";

export default function ButtonPrimary({ type = "button", onClick, disabled = false, className = "", children }) {
	return (
		<Button
			className={`${className} font-secondary uppercase text-shadow-2xs text-background 
				px-2 py-1 rounded-sm bg-background-dark shadow-[1px_1px_0_0] shadow-background-dark 
				hover:bg-background-dark/80`
			}
			type={ type }
			onClick={ onClick }
			disabled={ disabled }
		>
			{ children }
		</Button>
	)
}