import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getRockets, removeAllRockets } from '../../redux/rockets/rockets';
import { getMissions, removeAllMissions } from '../../redux/missions/missions';
import Missions from '../missions/Missions';
import MyProfile from '../my_profile/MyProfile';
import Navbar from '../navbar/Navbar';
import Rockets from '../rockets/Rockets';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
    dispatch(getRockets());
    return () => {
      dispatch(removeAllMissions());
      dispatch(removeAllRockets());
    };
  }, [dispatch]);

  const missions = useSelector((state) => state.missionsReducer);
  const rockets = useSelector((state) => state.rocketsReducer);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MyProfile />} />
        <Route path="rockets" element={<Rockets rockets={rockets} />} />
        <Route path="missions" element={<Missions missions={missions} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
