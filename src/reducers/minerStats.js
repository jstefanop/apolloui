import {
  FETCH_MINER_BEGIN,
  FETCH_MINER_SUCCESS,
  FETCH_MINER_FAILURE
} from '../actions/miner';

const initialState = {
    "data": {
      "stats": [{
        "date": "2021-02-09 15:54:19",
        "statVersion": "1.2",
        "versions": {
          "miner": "v13.16.1",
          "minerDate": "2019-08-08",
          "minerDebug": "0",
          "mspVer": "0xd163"
        },
        "master": {
          "upTime": 0,
          "diff": 0,
          "boards": 0,
          "errorSpi": 0,
          "osc": 0,
          "hwAddr": "00:00:00:00:00:00",
          "boardsI": 0,
          "boardsW": 0,
          "wattPerGHs": 0,
          "intervals": {
            "int_0": {
              "name": "total",
              "interval": 0,
              "bySol": 0,
              "byDiff": 0,
              "byPool": 0,
              "byJobs": 0,
              "solutions": 0,
              "errors": 0,
              "errorRate": 0,
              "chipSpeed": 0,
              "chipRestarts": 0
            },
            "int_30": {
              "name": "30 sec",
              "interval": 0,
              "bySol": 0,
              "byDiff": 0,
              "byPool": 0,
              "byJobs": 0,
              "solutions": 0,
              "errors": 0,
              "errorRate": 0,
              "chipSpeed": 0,
              "chipRestarts": 0
            },
            "int_300": {
              "name": "5 min",
              "interval": 0,
              "bySol": 0,
              "byDiff": 0,
              "byPool": 0,
              "byJobs": 0,
              "solutions": 0,
              "errors": 0,
              "errorRate": 0,
              "chipSpeed": 0,
              "chipRestarts": 0
            },
            "int_900": {
              "name": "15 min",
              "interval": 0,
              "bySol": 0,
              "byDiff": 0,
              "byPool": 0,
              "byJobs": 0,
              "solutions": 0,
              "errors": 0,
              "errorRate": 0,
              "chipSpeed": 0,
              "chipRestarts": 0
            },
            "int_3600": {
              "name": "1 hour",
              "interval": 0,
              "bySol": 0,
              "byDiff": 0,
              "byPool": 0,
              "byJobs": 0,
              "solutions": 0,
              "errors": 0,
              "errorRate": 0,
              "chipSpeed": 0,
              "chipRestarts": 0
            }
          }
        },
        "pool": {
          "host": "us-east.stratum.slushpool.com",
          "port": 3333,
          "userName": "jstefanop.worker1",
          "diff": 0,
          "intervals": {
            "int_0": {
              "name": "total",
              "interval": 0,
              "jobs": 0,
              "cleanFlags": 0,
              "sharesSent": 0,
              "sharesAccepted": 0,
              "sharesRejected": 0,
              "solutionsAccepted": 0,
              "minRespTime": 0,
              "avgRespTime": 0,
              "maxRespTime": 0,
              "shareLoss": 0,
              "poolTotal": 0,
              "inService": 0,
              "subscribeError": 0,
              "diffChanges": 0,
              "reconnections": 0,
              "reconnectionsOnErrors": 0,
              "defaultJobShares": 0,
              "staleJobShares": 0,
              "duplicateShares": 0,
              "lowDifficultyShares": 0,
              "pwcSharesSent": 0,
              "pwcSharesDropped": 0,
              "bigDiffShares": 0,
              "belowTargetShare": 0,
              "pwcRestart": 0,
              "statOverflow": 0
            }
          }
        },
        "fans": {
          "int_0": {
            "rpm": [
              0
            ]
          }
        },
        "temperature": {
          "count": 0,
          "min": 0,
          "avr": 0,
          "max": 0
        },
        "slots": {
          "int_0": {
            "revision": 0,
            "spiNum": 0,
            "spiLen": 0,
            "pwrNum": 0,
            "pwrLen": 0,
            "btcNum": 0,
            "specVoltage": 0,
            "chips": 0,
            "pwrOn": 0,
            "pwrOnTarget": 0,
            "revAdc": 0,
            "temperature": 0,
            "temperature1": 0,
            "ocp": 0,
            "heaterErr": 0,
            "heaterErrNum": 0,
            "inOHOsc": 0,
            "ohOscNum": 0,
            "ohOscTime": 0,
            "overheats": 0,
            "overheatsTime": 0,
            "lowCurrRst": 0,
            "currents": [
              0,
              0
            ],
            "brokenPwc": 0,
            "solutions": 0,
            "errors": 0,
            "ghs": 0,
            "errorRate": 0,
            "chipRestarts": 0,
            "wattPerGHs": 0,
            "tmpAlert": [
              {
                "alertLo": 0,
                "alertHi": 0,
                "numWrite": 0
              },
              {
                "alertLo": 0,
                "alertHi": 0,
                "numWrite": 0
              }
            ],
            "osc": 0,
            "oscStopChip": "N/A"
          }
        },
        "slaves": [
          {
            "id": 0,
            "uid": "4A003D0008504E3943303320",
            "ver": "0x13160100",
            "rx": 0,
            "err": 0,
            "time": 0,
            "ping": 0
          }
        ]
      }]
    },
    loading: false,
    "error": null
}

export default function minerStatsReducer(state = initialState, action) {
    console.log(action)
  switch(action.type) {
    case FETCH_MINER_BEGIN:
      return {
        ...state,
        loading: true
      };

    case FETCH_MINER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        error: null
      };

    case FETCH_MINER_FAILURE:
      return {
        ...initialState,
        loading: false,
        error: action.error
      };

    default:
      return state;
  }
}