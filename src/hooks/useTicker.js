import { useEffect, useState } from "react"
import { client } from "../lib/contentful"

function useTicker() {

	const [tickers, setTickers] = useState(null)
	const [loading, setLoading] = useState(false)
	const [errorMsg, setErrorMsg] = useState(null)

	useEffect(() => {
		
		async function load() {
			
			setLoading(true)
			setErrorMsg(null)

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
			} catch(error) {
				if (error.name !== "AbortError") { setErrorMsg(error.message) }
			} finally {
				setLoading(false)
			}
		}

		load()
	}, [])

	return { tickers, loading, errorMsg }
}

export default useTicker