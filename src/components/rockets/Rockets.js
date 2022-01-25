import PropTypes from 'prop-types';
import Rocket from '../rocket/Rocket';

const Rockets = (props) => {
  const { rockets } = props;

  return (
    <div className="RocketsContainer">
      {rockets.map((rocket) => (
        <Rocket
          key={rocket.id}
          // eslint-disable-next-line camelcase
          rocket_name={rocket.rocket_name}
          description={rocket.description}
          // eslint-disable-next-line camelcase
          image={rocket.flickr_images[0]}
          isReserved={false}
        />
      ))}
    </div>
  );
};

Rockets.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  rockets: PropTypes.array.isRequired,
};

export default Rockets;
