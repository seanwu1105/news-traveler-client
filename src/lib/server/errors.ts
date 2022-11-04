import { error } from '@sveltejs/kit'

export async function throwErrorResponse(response: Response) {
  const { status } = response
  const json = await response.json()
  if (status === InternalServerErrorCode)
    throw error(status, `${json.message}: ${json.debug}`)
  if (status === GatewayTimeoutCode)
    throw error(status, `Timeout: ${json.reason}`)
  throw error(status, `${json.message}`)
}

const InternalServerErrorCode = 500
const GatewayTimeoutCode = 504
