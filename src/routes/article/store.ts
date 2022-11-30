import type { Sentiment } from '$lib/server/get-sentiment'
import type { News } from '$lib/server/search'
import { writable } from 'svelte/store'

export const articleNews = writable<News & { sentiment: Sentiment }>({
  content: 'Data Expired. Please search again.',
  sentiment: { confidence: 0, kind: 'neutral' },
  title: 'Data Expired. Please search again.',
  url: '#',
  source: null,
  publishedAt: null,
  author: null,
  urlToImage: null,
})
