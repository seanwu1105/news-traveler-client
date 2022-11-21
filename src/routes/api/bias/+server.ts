import { getBias } from '$lib/server/get-bias'
import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

export const POST: RequestHandler = async ({ request }) => {
  const { content } = await request.json()
  const results = await getBias({ fetch, content })
  return json(results)
}
