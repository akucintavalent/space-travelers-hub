/* eslint-disable camelcase */
import axios from 'axios';

const ADD_ROCKET = 'space-travelers-hub/rockets/ADD_ROCKET';
const REMOVE_ALL_ROCKETS = 'space-travelers-hub/rockets/REMOVE_ALL_ROCKETS';
const RESERVE_ROCKET = 'space-travelers-hub/rockets/RESERVE_ROCKET';
const CANCEL_ROCKET_BOOKING = 'space-travelers-hub/rockets/CANCEL_ROCKET_BOOKING';

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

export const cancelRocketBooking = (payload) => ({
  type: CANCEL_ROCKET_BOOKING,
  id: payload.id,
});

export const getRockets = () => (dispatch) => {
  axios.get('https://api.spacexdata.com/v3/rockets')
    .then((response) => {
      const rockets = response.data;
      rockets.forEach(({
        id,
        rocket_name,
        description,
        flickr_images,
      }) => {
        const rocket = {
          id,
          rocket_name,
          description,
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
    case CANCEL_ROCKET_BOOKING:
      return state.map((rocket) => {
        if (rocket.id !== action.id) return rocket;
        return { ...rocket, reserved: false };
      });
    default:
      return state;
  }
};

export default reducer;
