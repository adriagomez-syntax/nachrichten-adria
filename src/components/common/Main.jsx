export default function Main({ className = "", children }) {
	return (
		<main className={`${className} p-4`}>
			{ children }
		</main>
	)
}