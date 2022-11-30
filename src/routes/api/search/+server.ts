import { ParameterErrorCode } from '$lib/errors'
import { search } from '$lib/server/search'
import { error, json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

export const GET: RequestHandler = async ({ url }) => {
  const query = url.searchParams.get('query')
  if (!query) throw error(ParameterErrorCode, 'Missing query')
  const offset = url.searchParams.get('offset')
  const results = await search({ fetch, query, offset: Number(offset) })
  return json(results)
}
