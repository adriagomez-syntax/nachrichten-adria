import { useEffect, useState } from "react"
import { doRequest } from "../assets/api/contentfulApi"

function useNachricht(id) {

	const [loadedData, setLoadedData] = useState(null)
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
					`&sys.id=${id}`
					, controller.signal
				)

				if (!data || !data.items) {
					setLoadedData(null)
					return
				}

				console.log(data)

				const item = data.items[0]
				const bildId = item.fields.bild?.sys.id
				const asset = data.includes?.Asset?.find(a => a.sys.id === bildId)
				const bildUrl = asset ? "https:" + asset.fields.file.url : null

				setLoadedData({
					id: item.sys.id,
					title: item.fields.titel,
					teaser: item.fields.teaser,
					body: item.fields.inhalt,
					hashtags: item.fields.hashtags,
					img: bildUrl,
					date: item.sys.createdAt
				})
			} catch(error) {
				if (error.name !== "AbortError") { setErrorMsg(error.message) }
			} finally {
				setLoading(false)
			}
		}

		load()

		return () => controller.abort()

	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return { loadedData, loading, errorMsg }
}

export default useNachricht