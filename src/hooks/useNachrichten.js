import { useEffect, useState } from "react"
import { doRequest } from "../assets/api/contentfulApi"

function useNachrichten() {
	const [nachrichten, setNachrichten] = useState(null)
	const [loading, setLoading] = useState(false)
	const [errorMsg, setErrorMsg] = useState(null)

	useEffect(() => {

		async function load() {

			setLoading(true)
			setErrorMsg(null)

			try {
				const data = await doRequest(
					"/entries?content_type=nachricht" +
					"&select=sys.id,fields.titel,fields.teaser,fields.hashtags" + //"fields.bild"
					"&order=-sys.createdAt"
				)

				setNachrichten(data.items.map(item => (
					{
						id: item.sys.id,
						title: item.fields.titel,
						teaser: item.fields.teaser,
						hashtags: item.fields.hashtags,
						//img: item.fields.bild?.fields.file.url
					}
				)))
			} catch(error) {
				if (error.name !== "AbortError") { setErrorMsg(error.message) }
			} finally {
				setLoading(false)
			}
		}

		load()

	}, [])

	return { nachrichten, loading, errorMsg }
}

export default useNachrichten