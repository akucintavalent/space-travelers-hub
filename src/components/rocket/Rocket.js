import PropTypes from 'prop-types';
import './Rocket.css';

const Rocket = (props) => {
  const {
    // eslint-disable-next-line camelcase
    rocket_name, description, image, isReserved,
  } = props;
  return (
    <div className="RocketContainer">
      <img src={image} alt="a rocket" />
      <div>
        { /* eslint-disable-next-line camelcase */ }
        <h3>{rocket_name}</h3>
        <p>{description}</p>
        {isReserved
          ? <button className="CancelReservation" type="button">Cancel Reservation</button>
          : <button className="ReserveRocket" type="button">Reserve Rocket</button>}
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocket_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isReserved: PropTypes.bool.isRequired,
};

export default Rocket;
