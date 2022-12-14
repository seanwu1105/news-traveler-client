import { throwErrorResponse } from '$lib/errors'
import { API_URL } from './env'
import type { CancelableApiRequest } from './utils'

export async function search({
  fetch,
  signal,
  query,
  offset,
}: CancelableApiRequest<SearchArgs>): Promise<SearchResult> {
  const url = new URL('/search', API_URL)
  url.searchParams.set('query', query)
  url.searchParams.set('count', '25')
  if (offset) url.searchParams.set('offset', `${offset}`)
  const response = await fetch(url, { signal })

  if (!response.ok) await throwErrorResponse(response)

  return response.json()
}

type SearchArgs = { readonly query: string; readonly offset?: number }

export type SearchResult = {
  readonly results: readonly News[]
  readonly nextOffset: number | null
}

export type News = {
  readonly source: string | null
  readonly author: string | null
  readonly title: string
  readonly content: string
  readonly url: string
  readonly urlToImage: string | null
  readonly publishedAt: string | null
}
