import { formatDistanceToNow } from "date-fns"
import { de } from "date-fns/locale"

export function formatDate(date) {
	
	const datum = new Date(date)

	return `${dateToNow(datum)} • ${fullDate(datum)}`
}

export function fullDate(date) {
	
	if (typeof date === "string") { date = new Date(date)}
	
	return date.toLocaleDateString("de-DE", {
		day: "numeric",
		month: "long",
		year: "numeric"
	})
}

export function dateToNow(date) {
	
	if (typeof date === "string") { date = new Date(date)}
	
	return formatDistanceToNow(date, {
		addSuffix: true,
		locale: de
	})
}