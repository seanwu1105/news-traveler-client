import { search } from '$lib/server/search'
import type { PageServerLoad } from './$types'
import { getSentiment } from '$lib/server/get-sentiment'

export const load: PageServerLoad = async ({ fetch, url }) => {
  const query = url.searchParams.get('query')
  if (!query) return { results: [] }
  const searchResult = await search({ fetch, query })
  return {
    results: Promise.all(
      searchResult.results.map(async news => ({
        ...news,
        ...(await getSentiment({ fetch, content: news.content })),
      })),
    ),
  }
}
