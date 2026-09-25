import { useEffect, useState } from "react"
import { client } from "../lib/contentful"

function useTicker() {

	const [tickers, setTickers] = useState(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	async function load() {
			
		setLoading(true)
		setError(null)

		try
		{
			const data = await client.getEntries({
				content_type: "ticker",
				order: "-sys.createdAt"
			})

			setTickers(data.items.map(item => ({
				id: item.sys.id,
				title: item.fields.titel,
				text: item.fields.text,
				date: item.sys.createdAt
			})))
		} catch(err) {
			if (err.name !== "AbortError") {
				try {
					const parsed = JSON.parse(err.message)
					setError(parsed)
				} catch(e) {
					setError(e)
				}
			}
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
		load()
	}, [])

	return { tickers, loading, error, load }
}

export default useTicker