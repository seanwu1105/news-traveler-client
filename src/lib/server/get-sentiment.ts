import { API_URL } from './env'
import { throwErrorResponse } from './errors'
export async function getSentiment({
  fetch,
  signal,
  content,
}: GetSentimentArgs): Promise<GetSentimentResult> {
  const url = new URL('/sentiment', API_URL)
  const body = JSON.stringify({ content })
  const response = await fetch(url, { signal, body, method: 'POST' })

  if (!response.ok) throwErrorResponse(response)

  return { ...(await response.json()) }
}

type GetSentimentArgs = {
  readonly fetch: typeof fetch
  readonly signal?: AbortSignal
  readonly content: string
}

type GetSentimentResult = {
  readonly sentiment: {
    readonly kind: 'positive' | 'negative' | 'neutral'
    readonly confidence: number
  }
}
