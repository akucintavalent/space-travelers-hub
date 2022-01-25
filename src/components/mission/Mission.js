import PropTypes from 'prop-types';
import styles from './Mission.module.css';

const Mission = (props) => {
  // eslint-disable-next-line camelcase
  const { mission_name, description, status } = props;
  return (
    <tr>
      {/* eslint-disable-next-line camelcase */}
      <td>{mission_name}</td>
      <td>{description}</td>
      <td>
        {status
          ? (<div className={styles.ActiveMember}>Active Member</div>)
          : (<div className={styles.InactiveMember}>NOT A MEMBER</div>)}
      </td>
      <td>
        {status
          ? (<button className={styles.LeaveMission} type="button">Leave Mission</button>)
          : (<button className={styles.JoinMission} type="button">Join Mission</button>)}
      </td>
    </tr>
  );
};

Mission.propTypes = {
  mission_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};

export default Mission;
