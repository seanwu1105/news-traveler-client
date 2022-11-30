import { SeeOtherCode } from '$lib/errors'
import { redirect } from '@sveltejs/kit'
import type { PageLoad } from './$types'

export const load: PageLoad = async ({ url }) => {
  const query = url.searchParams.get('query')

  if (!query) throw redirect(SeeOtherCode, '/')
  return { query }
}
