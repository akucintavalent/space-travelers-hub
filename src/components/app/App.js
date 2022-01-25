import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMissions, removeAllMissions } from '../../redux/missions/missions';
import Missions from '../missions/Missions';
import MyProfile from '../my_profile/MyProfile';
import Navbar from '../navbar/Navbar';
import Rockets from '../rockets/Rockets';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
    return () => {
      dispatch(removeAllMissions());
    };
  }, []);

  const missions = useSelector((state) => state.missionsReducer);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MyProfile />} />
        <Route path="rockets" element={<Rockets />} />
        <Route path="missions" element={<Missions missions={missions} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
