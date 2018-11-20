
import { ERROR_QUERY } from './shared';
import { query } from './apiClient';

async function createPool(input, { accessToken }) {
  const { error } = await query({
    query: `
      query Pool ($input: PoolCreateInput!) {
        Pool {
          create (input: $input) {
            result {
              pool {
                id
                enabled
                donation
                url
                username
                password
                proxy
                index
              }
            }
            ${ERROR_QUERY}
          }
        }
      }
    `,
    variables: {
      input,
    },
    path: 'Pool.create',
    accessToken,
  });

  return { error };
}

async function fetchPools({ accessToken }) {
  const { result, error } = await query({
    query: `
      query Pool {
        Pool {
          list {
            result {
              pools {
                id
                enabled
                donation
                url
                username
                password
                proxy
                index
              }
            }
            ${ERROR_QUERY}
          }
        }
      }
    `,
    path: 'Pool.list',
    accessToken,
  });

  return { result, error };
}

async function updatePools({ pools, accessToken }) {
  const { result, error } = await query({
    query: `
      query Pool ($input: PoolUpdateAllInput!) {
        Pool {
          updateAll(input: $input) {
            result {
              pools {
                id
                enabled
                donation
                url
                username
                password
                proxy
                index
              }
            }
            ${ERROR_QUERY}
          }
        }
      }
    `,
    path: 'Pool.updateAll',
    accessToken,
    variables: {
      input: { pools },
    },
  });

  return { result, error };
}

export default {
  createPool,
  fetchPools,
  updatePools,
};
