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
  similarityThreshold,
  sentimentFilter,
}: CancelableApiRequest<ListOppositeSentimentNewsArgs>): Promise<ListOppositeSentimentNewsResult> {
  const url = new URL('/opposite-sentiment-news', API_URL)
  const body = JSON.stringify({
    content,
    keyword,
    count: 24,
    similarityThreshold,
    sentimentFilter,
  })
  const response = await fetch(url, {
    signal,
    body,
    method: 'POST',
    headers: { 'content-type': 'application/json' },
  })

  if (!response.ok) await throwErrorResponse(response)

  return response.json()
}

export type ListOppositeSentimentNewsArgs = {
  readonly content: string
  readonly keyword: string
  readonly similarityThreshold: number
  readonly sentimentFilter: readonly ('positive' | 'negative' | 'neutral')[]
}

export type ListOppositeSentimentNewsResult = {
  readonly results: readonly (News & { readonly sentiment: Sentiment })[]
}
