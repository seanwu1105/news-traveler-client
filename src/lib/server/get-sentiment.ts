import { throwErrorResponse } from '$lib/errors'
import { API_URL } from './env'
import type { CancelableApiRequest } from './utils'
export async function getSentiment({
  fetch,
  signal,
  content,
}: CancelableApiRequest<GetSentimentArgs>): Promise<GetSentimentResult> {
  const url = new URL('/sentiment', API_URL)
  const body = JSON.stringify({ content })
  const response = await fetch(url, {
    signal,
    body,
    method: 'POST',
    headers: { 'content-type': 'application/json' },
  })

  if (!response.ok) await throwErrorResponse(response)

  return response.json()
}

type GetSentimentArgs = { readonly content: string }

export type GetSentimentResult = {
  readonly sentiment: Sentiment
}

export type Sentiment = {
  readonly kind: 'positive' | 'negative' | 'neutral'
  readonly confidence: number
}
