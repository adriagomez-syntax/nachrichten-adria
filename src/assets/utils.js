export function formatDate(date) {
	const datum = new Date(date)

	return datum.toLocaleDateString("de-DE", {
		day: "numeric",
		month: "long",
		year: "numeric"
	})
}