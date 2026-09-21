import { env } from "./mockEnv"

const BASE_URL = "https://cdn.contentful.com/spaces"
const SPACE = env.SPACE_ID
const TOKEN = env.TOKEN

export async function doRequest(url, signal = null) {
	const full_url = `${BASE_URL}/${SPACE}/environments/master/${url}&access_token=${TOKEN}`
	const data = await fetch(full_url, { signal: signal })
		.then((resp) => resp.json())

	return data
}