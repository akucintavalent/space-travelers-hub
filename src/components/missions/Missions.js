import PropTypes from 'prop-types';
import Mission from '../mission/Mission';
import './Missions.css';

const Missions = (props) => {
  const { missions } = props;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <Mission
              key={mission.mission_id}
              mission_id={mission.mission_id}
              mission_name={mission.mission_name}
              description={mission.description}
              reserved={!!mission.reserved}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

Missions.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  missions: PropTypes.array.isRequired,
};

export default Missions;
