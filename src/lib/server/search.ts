import { API_URL } from './env'
import { throwErrorResponse } from './errors'

export async function search({
  // fetch, // TODO: use this after the PR is released: https://github.com/sveltejs/kit/issues/7441
  signal,
  query,
}: SearchArgs): Promise<SearchResult> {
  const url = new URL('/search', API_URL)
  url.searchParams.set('query', query)
  const response = await fetch(`${url}`, { signal })

  if (!response.ok) throwErrorResponse(response)

  return { ...(await response.json()) }
}

type SearchArgs = {
  readonly fetch: typeof fetch
  readonly signal?: AbortSignal
  readonly query: string
}

type SearchResult = {
  readonly count: number
  readonly results: readonly News[]
}

type News = {
  readonly source: string
  readonly author: string | null
  readonly title: string
  readonly description: string
  readonly content: string
  readonly url: string
  readonly urlToImage: string | null
  readonly publishedAt: string
}
