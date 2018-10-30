
import { ERROR_QUERY } from './shared'
import { query } from './apiClient'

async function create (input, { accessToken }) {
  const { error } = await query({
    query: `
      query Pool ($input: PoolCreateInput!) {
        Pool {
          create (input: $input) {
            result {
              pool {
                id
                enabled
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
      input
    },
    path: 'Pool.create'
  })

  return { error }
}

export default {
  create,
}