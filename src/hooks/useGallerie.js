import { useEffect, useState } from "react"
import { client } from "../lib/contentful"

function useGallerie(query = "", limit = 1, skip = 0) {

	const [assetsLoaded, setAssetsLoaded] = useState(null)
	const [total, setTotal] = useState(0)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	useEffect(() => {

		async function load() {

			setLoading(true)
			setError(null)

			try
			{
				const data = await client.getAssets({
					"fields.title[match]": query,
					"fields.description[match]": query,
					limit: limit,
					skip: skip
				})

				setAssetsLoaded(data.items.map(asset => ({
					id: asset.sys.id,
					title: asset.fields.title,
					description: asset.fields.description,
					img: `https:${asset.fields.file.url}`,
					date: asset.sys.createdAt
				})))

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
		
	}, [query, limit, skip])

	return { assetsLoaded, total, loading, error }
}

export default useGallerie