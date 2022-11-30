import { throwErrorResponse } from '$lib/errors'
import { API_URL } from './env'
import type { CancelableApiRequest } from './utils'
export async function getBias({
  fetch,
  signal,
  content,
}: CancelableApiRequest<GetBiasArgs>): Promise<GetBiasResult> {
  const url = new URL('/bias', API_URL)
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

export type GetBiasArgs = { readonly content: string }

export type GetBiasResult = {
  readonly bias: number
}
