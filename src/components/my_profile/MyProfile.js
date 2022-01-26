import { useSelector } from 'react-redux';
import './MyProfile.css';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rocketsReducer);
  return (
    <div className="TablesContainer">
      <table>
        <thead>
          <tr>
            <th>My Missions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>My Missions</td>
          </tr>
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th>My Rockets</th>
          </tr>
        </thead>
        <tbody>
          {rockets
            .filter((rocket) => rocket.reserved)
            .map((rocket) => (
              <tr key={rocket.id}>
                <td>{rocket.rocket_name}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyProfile;
