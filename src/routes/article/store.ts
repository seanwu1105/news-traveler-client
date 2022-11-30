import type { Sentiment } from '$lib/get-sentiment'
import type { News } from '$lib/search'
import { writable } from 'svelte/store'

export const articleNews = writable<News & { sentiment: Sentiment }>()
