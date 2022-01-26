import axios from 'axios';

const ADD_ROCKET = 'space-travelers-hub/rockets/ADD_ROCKET';
const REMOVE_ALL_ROCKETS = 'space-travelers-hub/rockets/REMOVE_ALL_ROCKETS';
const RESERVE_ROCKET = 'space-travelers-hub/rockets/RESERVE_ROCKET';

const initialState = [];

export const addRocket = (payload) => ({
  type: ADD_ROCKET,
  payload,
});

export const removeAllRockets = () => ({ type: REMOVE_ALL_ROCKETS });

export const reserveRocket = (payload) => ({
  type: RESERVE_ROCKET,
  id: payload.id,
});

export const getRockets = () => (dispatch) => {
  axios.get('https://api.spacexdata.com/v3/rockets')
    .then((response) => {
      const rockets = response.data;
      rockets.forEach(({
        id,
        // eslint-disable-next-line camelcase
        rocket_name,
        description,
        // eslint-disable-next-line camelcase
        flickr_images,
      }) => {
        const rocket = {
          id,
          // eslint-disable-next-line camelcase
          rocket_name,
          description,
          // eslint-disable-next-line camelcase
          flickr_images,
        };
        dispatch(addRocket(rocket));
      });
    })
    .catch(() => {});
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROCKET:
      return [...state, action.payload];
    case REMOVE_ALL_ROCKETS:
      return [];
    case RESERVE_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.id) return rocket;
        return { ...rocket, reserved: true };
      });
    default:
      return state;
  }
};

export default reducer;
