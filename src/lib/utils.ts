export type CancelableApiRequest<T extends Record<string, any>> = T & {
  readonly fetch: typeof fetch
  readonly signal?: AbortSignal
}
