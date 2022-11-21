import { throwErrorResponse } from '$lib/errors'
import { API_URL } from './env'
import type { Sentiment } from './get-sentiment'
import type { News } from './search'
import type { CancelableApiRequest } from './utils'

export async function listOppositeSentimentNews({
  fetch,
  signal,
  content,
  keyword,
}: CancelableApiRequest<ListOppositeSentimentNewsArgs>): Promise<ListOppositeSentimentNewsResult> {
  const url = new URL('/opposite-sentiment-news', API_URL)
  const body = JSON.stringify({ content, keyword })
  const response = await fetch(url, {
    signal,
    body,
    method: 'POST',
    headers: { 'content-type': 'application/json' },
  })

  if (!response.ok) throwErrorResponse(response)

  return response.json()
}

export type ListOppositeSentimentNewsArgs = {
  readonly content: string
  readonly keyword: string
}

export type ListOppositeSentimentNewsResult = {
  readonly results: readonly (News & { readonly sentiment: Sentiment })[]
}
