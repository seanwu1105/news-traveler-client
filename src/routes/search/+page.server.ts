import { search } from '$lib/server/search'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ fetch, url }) => {
  const query = url.searchParams.get('query')
  if (!query) return { results: [] }
  return await search({ fetch, query })
}
