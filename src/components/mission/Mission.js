/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission } from '../../redux/missions/missions';
import styles from './Mission.module.css';

const Mission = (props) => {
  const {

    mission_id, mission_name, description, reserved,
  } = props;
  const dispatch = useDispatch();

  const joinMissionButton = () => {
    dispatch(joinMission({ mission_id }));
  };

  return (
    <tr>
      <td>{mission_name}</td>
      <td>{description}</td>
      <td>
        {reserved
          ? (<div className={styles.ActiveMember}>Active Member</div>)
          : (<div className={styles.InactiveMember}>NOT A MEMBER</div>)}
      </td>
      <td>
        {reserved
          ? (<button className={styles.LeaveMission} type="button">Leave Mission</button>)
          : (<button onClick={joinMissionButton} className={styles.JoinMission} type="button">Join Mission</button>)}
      </td>
    </tr>
  );
};

Mission.propTypes = {
  mission_id: PropTypes.string.isRequired,
  mission_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Mission;
