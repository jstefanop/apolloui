
import { ERROR_QUERY } from './shared';
import { query } from './apiClient';

async function fetchSettings({ accessToken }) {
  const { result, error } = await query({
    query: `
      query Settings {
        Settings {
          read {
            result {
              settings {
                agree
                minerMode
                voltage
                frequency
                fan_low
                fan_high
                apiAllow
                customApproval
                connectedWifi
                leftSidebarVisibility
                leftSidebarExtended
                rightSidebarVisibility
                temperatureUnit
                nodeRpcPassword
                nodeEnableTor
              }
            }
            ${ERROR_QUERY}
          }
        }
      }
    `,
    path: 'Settings.read',
    accessToken,
  });

  return { result, error };
}

async function saveSettings({ accessToken, settings }) {
  const { result, error } = await query({
    query: `
      query Settings ($input: SettingsUpdateInput!) {
        Settings {
          update (input: $input) {
            result {
              settings {
                agree
                minerMode
                voltage
                frequency
                fan_low
                fan_high
                apiAllow
                customApproval
                connectedWifi
                leftSidebarVisibility
                leftSidebarExtended
                rightSidebarVisibility
                temperatureUnit
                nodeRpcPassword
                nodeEnableTor
              }
            }
            ${ERROR_QUERY}
          }
        }
      }
    `,
    path: 'Settings.update',
    variables: {
      input: settings,
    },
    accessToken,
  });

  return { result, error };
}

export default {
  fetchSettings,
  saveSettings,
};
