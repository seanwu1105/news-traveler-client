import { listOppositeSentimentNews } from '$lib/server/list-opposite-sentiment-news'
import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

export const POST: RequestHandler = async ({ request }) => {
  const { content, keyword } = await request.json()
  const results = await listOppositeSentimentNews({ fetch, content, keyword })
  return json(results)
}
