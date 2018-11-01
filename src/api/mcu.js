
import { ERROR_QUERY } from './shared'
import { query } from './apiClient'

async function fetchMcu ({ accessToken }) {
  const result = await {
    "hostname": "orangepizero",
    "operatingSystem": "Ubuntu 18.04 bionic",
    "uptime": "2018-10-31 12:36:12",
    "loadAverage": "0.00 0.05 0.06 1/108 1607",
    "architecture": "armv7l",
    "temperature": {
      celsius: "39930",
      fahrenheit: ""
    },
    "memory":
    {
      "total": 245760,
      "used": 201620,
      "cache": 119712,
      "swap": 0
    },
    "cpu":
    {
      "threads": 4,
      "usedPercent": 0,
      test: {
        test: true
      }
    },
    "disks": [{
      "total":7678936,
      "used":1759428,
      "mountPoint":"/"
    }, {
      "total":49584,
      "used":2536,
      "mountPoint":"/var/log"
    }]
  }

  const error = null

  return { result, error }
}

export default {
  fetchMcu
}