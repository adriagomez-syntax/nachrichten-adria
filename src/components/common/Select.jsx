export default function Select({ value, onChange, className = "", children }) {
	return (
		<select 
			className={`${className} p-1 bg-background shadow-[3px_3px_0_0] shadow-background-dark rounded-sm`}
			value={ value }
			onChange={ onChange }
		>
			{ children }
		</select>
	)
}