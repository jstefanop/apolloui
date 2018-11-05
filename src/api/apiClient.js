import axios from 'axios'

import { handleApiResponse } from './shared'

function parseURL(url) {
    var parser = document.createElement('a'),
        searchObject = {},
        queries, split, i;
    // Let the browser do the work
    parser.href = url;
    // Convert query string to object
    queries = parser.search.replace(/^\?/, '').split('&');
    for( i = 0; i < queries.length; i++ ) {
        split = queries[i].split('=');
        searchObject[split[0]] = split[1];
    }
    return {
        protocol: parser.protocol,
        host: parser.host,
        hostname: parser.hostname,
        port: parser.port,
        pathname: parser.pathname,
        search: parser.search,
        searchObject: searchObject,
        hash: parser.hash
    };
}

const currentUrl = parseURL(window.location.href);

const graphqlEndpoint = `http://${currentUrl.hostname}:5000/graphql`

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
