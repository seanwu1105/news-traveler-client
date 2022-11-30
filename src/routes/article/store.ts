import type { Sentiment } from '$lib/server/get-sentiment'
import type { News } from '$lib/server/search'
import { writable } from 'svelte/store'

export const articleNews = writable<News & { sentiment: Sentiment }>()
