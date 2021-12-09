import axios from 'axios';

import { handleApiResponse } from './shared';

const { hostname } = new URL(window.location.href);

const graphqlEndpoint = `http://${hostname}:${process.env.REACT_API_PORT || 5001}/api/graphql`;

export async function query({
  query: _query, variables, path, accessToken,
}) {
  try {
    const res = await axios.post(
      graphqlEndpoint,
      { query: _query, variables },
      accessToken ? { headers: { Authorization: `Bearer ${accessToken}` } } : {},
    );

    return handleApiResponse(res, path);
  } catch (err) {
    throw err;
  }
}
