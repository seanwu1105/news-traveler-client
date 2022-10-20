import type { LayoutLoad } from './$types'

export const load: LayoutLoad = ({ url: { pathname } }) => ({
  isRoot: pathname === '/',
})
