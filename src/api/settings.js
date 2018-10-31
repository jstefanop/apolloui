
import { ERROR_QUERY } from './shared'
import { query } from './apiClient'

async function fetchSettings ({ accessToken }) {
  const { result, error } = await query({
    query: `
      query Settings {
        Settings {
          read {
            result {
              settings {
                minerMode
                voltage
                frequency
                fan
                connectedWifi
                leftSidebarVisibility
                leftSidebarExtended
                rightSidebarVisibility
                temperatureUnit
              }
            }
            ${ERROR_QUERY}
          }
        }
      }
    `,
    path: 'Settings.read',
    accessToken
  })

  return { result, error }
}

export default {
  fetchSettings,
}