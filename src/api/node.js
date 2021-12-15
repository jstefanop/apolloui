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
                networkInfo {
                  version
                  subversion
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

async function startNode ({ accessToken }) {
  const { result, error } = await query({
    query: `
      query Node {
        Node {
          start {
            ${ERROR_QUERY}
          }
        }
      }
    `,
    path: 'Node.start',
    accessToken
  })

  return { result, error }
}

async function stopNode ({ accessToken }) {
  const { result, error } = await query({
    query: `
      query Node {
        Node {
          stop {
            ${ERROR_QUERY}
          }
        }
      }
    `,
    path: 'Node.stop',
    accessToken
  })

  return { result, error }
}

async function formatNode ({ accessToken }) {
  const { result, error } = await query({
    query: `
      query Node {
        Node {
          format {
            ${ERROR_QUERY}
          }
        }
      }
    `,
    path: 'Node.format',
    accessToken
  })

  return { result, error }
}

export default {
  fetchNode,
  startNode,
  stopNode,
  formatNode
}
