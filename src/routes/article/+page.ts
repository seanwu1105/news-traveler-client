import { SeeOtherCode } from '$lib/errors'
import type { Sentiment } from '$lib/server/get-sentiment'
import type { News } from '$lib/server/search'
import { redirect } from '@sveltejs/kit'
import type { PageLoad } from './$types'

let articleNews: (News & { sentiment: Sentiment }) | null = null

export function setArticleNews(news: News & { sentiment: Sentiment }) {
  articleNews = news
}

export const load: PageLoad = async ({ url }) => {
  const query = url.searchParams.get('query')

  if (!query) throw redirect(SeeOtherCode, '/')
  if (!articleNews)
    throw redirect(SeeOtherCode, `/search?${new URLSearchParams({ query })}`)
  return { query, articleNews }
}
