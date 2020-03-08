import { ERROR_QUERY } from './shared'
import { query } from './apiClient'

async function fetchNode ({ accessToken }) {
  const { result, error } = await query({
    query: `
      query Node {
        Node {
          stats {
            result {
              stats {
                timestamp
                blockCount
                connectionCount
                peerInfo {
                  addr
                  subver
                }
              }
            }
            ${ERROR_QUERY}
          }
        }
      }
    `,
    path: 'Node.stats',
    accessToken
  })

  return { result, error }
}

export default { fetchNode }