/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { cancelRocketBooking, reserveRocket } from '../../redux/rockets/rockets';
import './Rocket.css';

const Rocket = (props) => {
  const {
    id, rocket_name, description, image, reserved,
  } = props;
  const dispatch = useDispatch();

  const reserveRocketButton = () => {
    dispatch(reserveRocket({ id }));
  };

  const cancelRocketBookingButton = () => {
    dispatch(cancelRocketBooking({ id }));
  };

  return (
    <div className="RocketContainer">
      <img src={image} alt="a rocket" />
      <div>
        <h3>{rocket_name}</h3>
        <p>{description}</p>
        {reserved
          ? (
            <button
              className="CancelReservation"
              onClick={cancelRocketBookingButton}
              type="button"
            >
              Cancel Reservation
            </button>
          )
          : (
            <button
              className="ReserveRocket"
              onClick={reserveRocketButton}
              type="button"
            >
              Reserve Rocket
            </button>
          )}
      </div>
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  rocket_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Rocket;
