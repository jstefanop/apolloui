import { ERROR_QUERY } from './shared'
import { query } from './apiClient'

async function fetchMcu ({ accessToken }) {
  const { result, error } = await query({
    query: `
      query Miner { 
        Mcu {
          stats {
            result {
              stats {
                timestamp
                hostname
                operatingSystem
                uptime
                loadAverage
                architecture
                temperature
                memory {
                  total
                  available
                  used
                  cache
                  total
                }
                cpu {
                  threads
                  usedPercent
                }
                disks {
                  total
                  used
                  mountPoint
                }
              }
            }
            ${ERROR_QUERY}
          }
        }
      }
    `,
    path: 'Mcu.stats',
    accessToken
  })

  return { result, error }
}

async function rebootMcu ({ accessToken }) {
  const { result, error } = await query({
    query: `
      query Mcu { 
        Mcu {
          reboot {
            ${ERROR_QUERY}
          }
        }
      }
    `,
    path: 'Mcu.reboot',
    accessToken
  })

  return { result, error }
}

async function shutdownMcu ({ accessToken }) {
  const { result, error } = await query({
    query: `
      query Mcu { 
        Mcu {
          shutdown {
            ${ERROR_QUERY}
          }
        }
      }
    `,
    path: 'Mcu.shutdown',
    accessToken
  })

  return { result, error }
}


export default {
  fetchMcu,
  rebootMcu,
  shutdownMcu
}