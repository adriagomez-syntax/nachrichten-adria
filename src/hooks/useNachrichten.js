import { useEffect, useState } from "react"
import { doRequest } from "../assets/api/contentfulApi"

function useNachrichten(query = "", hash = "", sort = "-sys.createdAt", limit = 1, skip = 0) {
	
	const [total, setTotal] = useState(0)
	const [nachrichten, setNachrichten] = useState(null)
	const [loading, setLoading] = useState(false)
	const [errorMsg, setErrorMsg] = useState(null)

	useEffect(() => {

		const controller = new AbortController()
		
		async function load() {

			setLoading(true)
			setErrorMsg(null)

			try {
				const data = await doRequest(
					"/entries?content_type=nachricht" +
					"&select=sys.id,fields.titel,fields.teaser,fields.hashtags,sys.createdAt" +
					(query && `&query=${query}`) +
					(hash && `&fields.hashtags[in]=${hash}`) +
					(sort && `&order=${sort}`) +
					(limit > 0 ? `&limit=${limit}` : "") +
					(skip > 0 ? `&skip=${skip}` : "")
					, controller.signal
				)

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
						hashtags: item.fields.hashtags,
						date: item.sys.createdAt
					}
				)))

				setTotal(data.total)
			} catch(error) {
				if (error.name !== "AbortError") { setErrorMsg(error.message) }
			} finally {
				setLoading(false)
			}
		}

		load()

		return () => controller.abort()

	}, [query, hash, sort, limit, skip])

	return { nachrichten, loading, errorMsg, total }
}

export default useNachrichten