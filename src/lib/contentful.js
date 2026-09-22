import { createClient } from "contentful";
import { env } from "./mockEnv";

export const client = createClient({
	space: env.SPACE_ID,
	accessToken: env.TOKEN
})