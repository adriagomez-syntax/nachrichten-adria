
export default function Button({ type = "button", onClick, disabled = false, className = "", children }) {
	return (
		<button
			className={`${className} flex items-center justify-between cursor-pointer transition duration-100
				not-disabled:active:transform not-disabled:active:scale-95 
				disabled:opacity-70 disabled:cursor-not-allowed
			`}
			type={ type }
			onClick={ onClick }
			disabled={ disabled }
		>
			{ children }
		</button>
	)
}