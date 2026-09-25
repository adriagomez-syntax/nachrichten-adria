import { useEffect, useState } from "react"
import { client } from "../lib/contentful"

function useNachrichtSDK(id) {

	const [loadedData, setLoadedData] = useState(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	useEffect(() => {

		async function load() {

			setLoading(true)
			setError(null)

			try {
				const data = await client.getEntries({
					content_type: "nachricht",
					"sys.id": id
				})

				if (!data || !data.items) {
					setLoadedData(null)
					return
				}

				const item = data.items[0]

				setLoadedData({
					id: item.sys.id,
					title: item.fields.titel,
					teaser: item.fields.teaser,
					body: item.fields.inhalt,
					hashtags: item.fields.hashtags,
					img: item.fields.bild.fields.file.url,
					date: item.sys.createdAt
				})
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

		load()
		
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return { loadedData, loading, error }
}

export default useNachrichtSDK