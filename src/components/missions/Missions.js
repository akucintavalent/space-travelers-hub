import PropTypes from 'prop-types';

const Missions = (props) => {
  const { missions } = props;

  return (
    <div>
      {missions.map((mission) => (<div key={mission.mission_id}>{mission.mission_name}</div>))}
    </div>
  );
};

Missions.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  missions: PropTypes.array.isRequired,
};

export default Missions;
