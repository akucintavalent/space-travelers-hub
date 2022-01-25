import PropTypes from 'prop-types';

const Rockets = (props) => {
  const { rockets } = props;

  return (
    <div>
      {rockets.map((rocket) => (<div key={rocket.id}>{rocket.rocket_name}</div>))}
    </div>
  );
};

Rockets.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  rockets: PropTypes.array.isRequired,
};

export default Rockets;
