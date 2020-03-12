
import selectn from 'selectn'

export const ERROR_QUERY = `
  error {
    type
    severity
    message
    reasons {
      path
      message
      reason
    }
  }
`

export const MINER_STATUS_QUERY = `
  status {
    status
    when
    code
    msg
    description
  }
`

export function handleApiResponse (res, path) {
  const data = selectn(`data.data.${path}`, res)

  if (data.result === undefined && data.error === undefined) {
    data.error = { message: 'Internal error'}
  }

  return data
}
