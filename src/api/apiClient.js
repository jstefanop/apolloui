import axios from 'axios'

import { handleApiResponse } from './shared'

const graphqlEndpoint = 'http://localhost:5000/graphql'

export async function query ({ query, variables, path, accessToken }) {
  try {
    const res = await axios.post(
      graphqlEndpoint,
      { query, variables },
      accessToken ? { headers: { 'Authorization': `Bearer ${accessToken}` } } : {}
    )

    return handleApiResponse(res, path)
  } catch (err) {
    throw err
  }
}
