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
                blockchainInfo {
                  blocks
                  blockTime
                  headers
                  sizeOnDisk
                }
                connectionCount
                miningInfo {
                  difficulty
                  networkhashps
                }
                peerInfo {
                  addr
                  subver
                }
                error {
                  code
                  message
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

  // Convert large sizeOnDisk back to number
  if (result && result.stats && result.stats.blockchainInfo && result.stats.blockchainInfo.sizeOnDisk) {
    result.stats.blockchainInfo.sizeOnDisk = parseInt(result.stats.blockchainInfo.sizeOnDisk)
  }

  return { result, error }
}

export default { fetchNode }
