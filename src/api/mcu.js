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
                minerTemperature
                minerFanSpeed
                activeWifi
                bfgminerLog
                network {
                  name
                  address
                  mac
                }
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

async function versionMcu ({ accessToken }) {
  const { result, error } = await query({
    query: `
      query Mcu {
        Mcu {
          version {
            result
            ${ERROR_QUERY}
          }
        }
      }
    `,
    path: 'Mcu.version',
    accessToken
  })

  return { result, error }
}

async function wifiScanMcu ({ accessToken }) {
  const { result, error } = await query({
    query: `
      query Mcu {
        Mcu {
          wifiScan {
            result {
              wifiScan {
                ssid
                mode
                channel
                rate
                signal
                security
                inuse
              }
            }
            ${ERROR_QUERY}
          }
        }
      }
    `,
    path: 'Mcu.wifiScan',
    accessToken
  })

  return { result, error }
}

async function wifiConnectMcu ({ accessToken, options }) {
  const { result, error } = await query({
    query: `
      query Mcu ($input: McuWifiConnectInput!) {
        Mcu {
          wifiConnect (input: $input) {
            result {
              address
            }
            ${ERROR_QUERY}
          }
        }
      }
    `,
    path: 'Mcu.wifiConnect',
    variables: {
      input: options,
    },
    accessToken
  })

  return { result, error }
}

async function wifiDisconnectMcu ({ accessToken }) {
  const { result, error } = await query({
    query: `
      query Mcu  {
        Mcu {
          wifiDisconnect {
            ${ERROR_QUERY}
          }
        }
      }
    `,
    path: 'Mcu.wifiDisconnect',
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

async function updateMcu ({ accessToken }) {
  const { result, error } = await query({
    query: `
      query Mcu { 
        Mcu {
          update {
            ${ERROR_QUERY}
          }
        }
      }
    `,
    path: 'Mcu.update',
    accessToken
  })

  return { result, error }
}

async function updateProgressMcu ({ accessToken }) {
  const { result, error } = await query({
    query: `
      query Mcu { 
        Mcu {
          updateProgress {
            result {
              value
            }
            ${ERROR_QUERY}
          }
        }
      }
    `,
    path: 'Mcu.updateProgress',
    accessToken
  })

  return { result, error }
}


export default {
  fetchMcu,
  versionMcu,
  wifiScanMcu,
  wifiConnectMcu,
  wifiDisconnectMcu,
  rebootMcu,
  shutdownMcu,
  updateMcu,
  updateProgressMcu
}