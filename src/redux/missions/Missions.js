import axios from 'axios';

const ADD_MISSION = 'space-travelers-hub/missions/ADD_MISSION';
const REMOVE_ALL_MISSIONS = 'space-travelers-hub/missions/REMOVE_ALL_MISSIONS';

const initialState = [];

export const addMission = (payload) => ({
  type: ADD_MISSION,
  payload,
});

export const removeAllMissions = () => ({ type: REMOVE_ALL_MISSIONS });

export const getMissions = () => (dispatch) => {
  axios.get('https://api.spacexdata.com/v3/missions')
    .then((response) => {
      const missions = response.data;
      missions.forEach((mission) => {
        // eslint-disable-next-line camelcase
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
    default:
      return state;
  }
};

export default reducer;
