import { useEffect, useState } from "react";
import { client } from "../lib/contentful";

function useNachrichtenSDK(query = "", hash = "", sort = "-sys.createdAt", limit = 1, skip = 0) {

	const [total, setTotal] = useState(0)
	const [nachrichten, setNachrichten] = useState(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	useEffect(() => {

		async function load() {

			setLoading(true)
			setError(null)

			try {
				const filter = {
					content_type: "nachricht",
					select: "sys.id,fields.titel,fields.teaser,fields.hashtags",
					query: query,
					order: sort,
					limit: limit,
					skip: skip
				}

				if (hash) { filter["fields.hashtags[in]"] = hash }

				const data = await client.getEntries(filter)

				if (!data || !data.items) {
					setNachrichten(null)
					setTotal(0)
					return
				}

				setNachrichten(data.items.map(item => (
					{
						id: item.sys.id,
						title: item.fields.titel,
						teaser: item.fields.teaser,
						hashtags: item.fields.hashtags
					}
				)))

				setTotal(data.total)
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
	}, [query, hash, sort, limit, skip])

	return { nachrichten, total, loading, error }
}

export default useNachrichtenSDK