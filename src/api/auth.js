
import { ERROR_QUERY } from './shared';
import { query } from './apiClient';

async function fetchStatus() {
  const { result, error } = await query({
    query: `
      query Auth {
        Auth {
          status {
            result {
              status
            }
            ${ERROR_QUERY}
          }
        }
      }
    `,
    path: 'Auth.status',
  });

  return { result, error };
}

async function saveSetup({ password }) {
  const { error } = await query({
    query: `
      query Auth ($input: AuthSetupInput!) {
        Auth {
          setup (input: $input) {
            ${ERROR_QUERY}
          }
        }
      }
    `,
    variables: {
      input: {
        password,
      },
    },
    path: 'Auth.setup',
  });

  return { error };
}

async function login({ password }) {
  const { result, error } = await query({
    query: `
      query Auth ($input: AuthLoginInput!) {
        Auth {
          login (input: $input) {
            result {
              accessToken
            }
            ${ERROR_QUERY}
          }
        }
      }
    `,
    variables: {
      input: {
        password,
      },
    },
    path: 'Auth.login',
  });

  return { result, error };
}

async function changePassword({ password, accessToken }) {
  const { error } = await query({
    query: `
      query Auth ($input: AuthChangePasswordInput!) {
        Auth {
          changePassword (input: $input) {
            ${ERROR_QUERY}
          }
        }
      }
    `,
    variables: {
      input: {
        password,
      },
    },
    path: 'Auth.changePassword',
    accessToken,
  });

  return { error };
}

export default {
  changePassword,
  fetchStatus,
  saveSetup,
  login,
};
