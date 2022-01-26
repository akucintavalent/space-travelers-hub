/* eslint-disable camelcase */
import axios from 'axios';

const ADD_MISSION = 'space-travelers-hub/missions/ADD_MISSION';
const REMOVE_ALL_MISSIONS = 'space-travelers-hub/missions/REMOVE_ALL_MISSIONS';
const JOIN_MISSION = 'space-travelers-hub/missions/JOIN_MISSION';

const initialState = [];

export const addMission = (payload) => ({
  type: ADD_MISSION,
  payload,
});

export const removeAllMissions = () => ({ type: REMOVE_ALL_MISSIONS });

export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  mission_id: payload.mission_id,
});

export const getMissions = () => (dispatch) => {
  axios.get('https://api.spacexdata.com/v3/missions')
    .then((response) => {
      const missions = response.data;
      missions.forEach((mission) => {
        const { mission_id, mission_name, description } = mission;
        const newMission = { mission_id, mission_name, description };
        dispatch(addMission(newMission));
      });
    })
    .catch(() => {});
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MISSION:
      return [...state, action.payload];
    case REMOVE_ALL_MISSIONS:
      return [];
    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.mission_id !== action.mission_id) return mission;
        return { ...mission, reserved: true };
      });
    default:
      return state;
  }
};

export default reducer;
