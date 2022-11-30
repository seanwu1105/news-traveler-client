import { getSentiment } from '$lib/server/get-sentiment'
import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

export const POST: RequestHandler = async ({ request }) => {
  const { content } = await request.json()
  const results = await getSentiment({ fetch, content })
  return json(results)
}
