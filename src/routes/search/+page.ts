import { getSentiment } from '$lib/get-sentiment'
import { search } from '$lib/search'
import type { PageLoad } from './$types'

export const load: PageLoad = async ({ fetch, url }) => {
  const query = url.searchParams.get('query')
  if (!query) return { results: [], query: '' }
  const searchResult = await search({ fetch, query })
  return {
    nextOffset: searchResult.nextOffset,
    results: Promise.all(
      searchResult.results.map(async news => ({
        ...news,
        ...(await getSentiment({ fetch, content: news.content })),
      })),
    ),
    query,
  }
}
