
import { ERROR_QUERY, MINER_STATUS_QUERY } from './shared'
import { query } from './apiClient'

async function fetchMiner ({ accessToken }) {
  const { result, error } = await query({
    query: `
      query Miner {
        Miner {
          stats {
            result {
              stats {
                summary {
                  ${MINER_STATUS_QUERY}
                  data {
                    elapsed
                    mHSAv
                    mHS20s
                    foundBlocks
                    getworks
                    accepted
                    rejected
                    hardwareErrors
                    utility
                    discarded
                    stale
                    getFailures
                    localWork
                    remoteFailures
                    networkBlocks
                    totalMH
                    diff1Work
                    workUtility
                    difficultyAccepted
                    difficultyRejected
                    difficultyStale
                    bestShare
                    deviceHardware
                    deviceRejected
                    poolRejected
                    poolStale
                    lastGetwork
                  }
                }
                devs {
                  ${MINER_STATUS_QUERY}
                  data {
                    pga
                    name
                    id
                    enabled
                    status
                    deviceElapsed
                    mHSAv
                    mHS20s
                    mHSRolling
                    accepted
                    rejected
                    hardwareErrors
                    utility
                    stale
                    lastSharePool
                    lastShareTime
                    totalMH
                    diff1Work
                    workUtility
                    difficultyAccepted
                    difficultyRejected
                    difficultyStale
                    lastShareDifficulty
                    lastValidWork
                    deviceHardware
                    deviceRejected
                  }
                }
                pools {
                  ${MINER_STATUS_QUERY}
                  data {
                    pool
                    url
                    status
                    priority
                    quota
                    miningGoal
                    longPoll
                    getworks
                    accepted
                    rejected
                    works
                    discarded
                    stale
                    getFailures
                    remoteFailures
                    user
                    lastShareTime
                    diff1Shares
                    proxy
                    difficultyAccepted
                    difficultyRejected
                    difficultyStale
                    lastShareDifficulty
                    hasStratum
                    stratumActive
                    stratumURL
                    bestShare
                    poolRejected
                    poolStale
                  }
                }
              }
            }
            ${ERROR_QUERY}
          }
        }
      }
    `,
    path: 'Miner.stats',
    accessToken
  })

  return { result, error }
}

async function startMiner ({ accessToken }) {
  const { result, error } = await query({
    query: `
      query Miner { 
        Miner {
          start {
            ${ERROR_QUERY}
          }
        }
      }
    `,
    path: 'Miner.start',
    accessToken
  })

  return { result, error }
}

async function restartMiner ({ accessToken }) {
  const { result, error } = await query({
    query: `
      query Miner { 
        Miner {
          restart {
            ${ERROR_QUERY}
          }
        }
      }
    `,
    path: 'Miner.restart',
    accessToken
  })

  return { result, error }
}

async function stopMiner ({ accessToken }) {
  const { result, error } = await query({
    query: `
      query Miner { 
        Miner {
          stop {
            ${ERROR_QUERY}
          }
        }
      }
    `,
    path: 'Miner.stop',
    accessToken
  })

  return { result, error }
}

async function onlineMiner ({ accessToken }) {
  const { result, error } = await query({
    query: `
      query Miner { 
        Miner {
          online {
            result {
              online {
                timestamp
                status
              }
            }
            ${ERROR_QUERY}
          }
        }
      }
    `,
    path: 'Miner.online',
    accessToken
  })

  return { result, error }
}

export default {
  fetchMiner,
  startMiner,
  stopMiner,
  restartMiner,
  onlineMiner
}
