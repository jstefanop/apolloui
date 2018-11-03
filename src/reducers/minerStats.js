import {
  FETCH_MINER_BEGIN,
  FETCH_MINER_SUCCESS
} from '../actions/miner';

const initialState = {
	data: {
		stats: {
			"summary": {
				"status": {
					"status": null,
					"when": null,
					"code": null,
					"msg": null,
					"description": null
				},
				"data": {
					"elapsed": 0,
					"mHSAv": 0,
					"mHS20s": 0,
					"foundBlocks": 0,
					"getworks": 0,
					"accepted": 0,
					"rejected": 0,
					"hardwareErrors": 0,
					"utility": 0,
					"discarded": 0,
					"stale": 0,
					"getFailures": 0,
					"localWork": 0,
					"remoteFailures": 0,
					"networkBlocks": 0,
					"totalMH": 0,
					"diff1Work": 0,
					"workUtility": 0,
					"difficultyAccepted": 0,
					"difficultyRejected": 0,
					"difficultyStale": 0,
					"bestShare": 0,
					"deviceHardware": 0,
					"deviceRejected": 0,
					"poolRejected": 0,
					"poolStale": 0,
					"lastGetwork": 0
				}
			},
			"devs": {
				"status": {
					"status": null,
					"when": null,
					"code": null,
					"msg": null,
					"description": null
				},
				"data": [{
					"pga": 0,
					"name": null,
					"id": 0,
					"enabled": null,
					"deviceElapsed": 0,
					"mHSAv": 0,
					"mHS20s": 0,
					"mHSRolling": 0,
					"accepted": 0,
					"rejected": 0,
					"hardwareErrors": 0,
					"utility": 0,
					"stale": 0,
					"lastSharePool": 0,
					"lastShareTime": 0,
					"totalMH": 0,
					"diff1Work": 0,
					"workUtility": 0,
					"difficultyAccepted": 0,
					"difficultyRejected": 0,
					"difficultyStale": 0,
					"lastShareDifficulty": 0,
					"lastValidWork": 0,
					"deviceHardware": 0,
					"deviceRejected": 0
				}]
			},
			"pools": {
				"status": {
					"status": null,
					"when": null,
					"code": null,
					"msg": null,
					"description": null
				},
				"data": [{
					"pool": 0,
					"url": null,
					"status": null,
					"priority": 0,
					"quota": 0,
					"miningGoal": null,
					"longPoll": null,
					"getworks": 0,
					"accepted": 0,
					"rejected": 0,
					"works": 0,
					"discarded": 0,
					"stale": 0,
					"getFailures": 0,
					"remoteFailures": 0,
					"user": null,
					"lastShareTime": 0,
					"diff1Shares": 0,
					"proxy": null,
					"difficultyAccepted": 0,
					"difficultyRejected": 0,
					"difficultyStale": 0,
					"lastShareDifficulty": 0,
					"hasStratum": null,
					"stratumActive": null,
					"stratumURL": null,
					"bestShare": 0,
					"poolRejected": 0,
					"poolStale": 0
				}]
			}
		}
	},
  	loading: false
};

export default function minerStatsReducer(state = initialState, action) {
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
        data: action.payload.data
      };

    default:
      return state;
  }
}