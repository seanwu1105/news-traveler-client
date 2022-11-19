import { writable } from 'svelte/store'
import type { News } from '$lib/server/search'

export const news = writable<News>()
