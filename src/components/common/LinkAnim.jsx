export default function LinkAnim({ className = "", children }) {
	return (
		<div className={`${className} active:transform active:scale-105 transition duration-100`}>
			{ children }
		</div>
	)
}