
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
                uuid
                date
                statVersion
                versions {
                  miner
                  minerDate
                  minerDebug
                  mspVer
                }
                master {
                  upTime
                  diff
                  boards
                  errorSpi
                  osc
                  hwAddr
                  boardsI
                  boardsW
                  wattPerGHs
                  intervals {
                    int_0 {
                      name
                      interval
                      bySol
                      byDiff
                      byPool
                      byJobs
                      solutions
                      errors
                      errorRate
                      chipSpeed
                      chipRestarts
                    }
                    int_30 {
                      name
                      interval
                      bySol
                      byDiff
                      byPool
                      byJobs
                      solutions
                      errors
                      errorRate
                      chipSpeed
                      chipRestarts
                    }
                    int_300 {
                      name
                      interval
                      bySol
                      byDiff
                      byPool
                      byJobs
                      solutions
                      errors
                      errorRate
                      chipSpeed
                      chipRestarts
                    }
                    int_900 {
                      name
                      interval
                      bySol
                      byDiff
                      byPool
                      byJobs
                      solutions
                      errors
                      errorRate
                      chipSpeed
                      chipRestarts
                    }
                    int_3600 {
                      name
                      interval
                      bySol
                      byDiff
                      byPool
                      byJobs
                      solutions
                      errors
                      errorRate
                      chipSpeed
                      chipRestarts
                    }
                  }
                }
                pool {
                  host
                  port
                  userName
                  diff
                  intervals {
                    int_0 {
                      name
                      interval
                      jobs
                      cleanFlags
                      sharesSent
                      sharesAccepted
                      sharesRejected
                      solutionsAccepted
                      minRespTime
                      avgRespTime
                      maxRespTime
                      shareLoss
                      poolTotal
                      inService
                      subscribeError
                      diffChanges
                      reconnections
                      reconnectionsOnErrors
                      defaultJobShares
                      staleJobShares
                      duplicateShares
                      lowDifficultyShares
                      pwcSharesSent
                      pwcSharesDropped
                      bigDiffShares
                      belowTargetShare
                      pwcRestart
                      statOverflow
                    }
                  }
                }
                fans {
                  int_0 {
                    rpm
                  }
                }
                temperature {
                  count
                  min
                  avr
                  max
                }
                slots {
                  int_0 {
                    revision
                    spiNum
                    spiLen
                    pwrNum
                    pwrLen
                    btcNum
                    specVoltage
                    chips
                    pwrOn
                    pwrOnTarget
                    revAdc
                    temperature
                    temperature1
                    ocp
                    heaterErr
                    heaterErrNum
                    inOHOsc
                    ohOscNum
                    ohOscTime
                    overheats
                    overheatsTime
                    lowCurrRst
                    currents
                    brokenPwc
                    solutions
                    errors
                    ghs
                    errorRate
                    chipRestarts
                    wattPerGHs
                    tmpAlert {
                      alertLo
                      alertHi
                      numWrite
                    }
                    osc
                    oscStopChip
                  }
                }
                slaves {
                  id
                  uid
                  ver
                  rx
                  err
                  time
                  ping
                }
              }
            }
            error {
              message
              type
              severity
              reasons {
                path
                message
                reason
              }
            }
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
