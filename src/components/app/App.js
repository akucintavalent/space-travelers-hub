import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getRockets, removeAllRockets } from '../../redux/rockets/rockets';
import Missions from '../missions/Missions';
import MyProfile from '../my_profile/MyProfile';
import Navbar from '../navbar/Navbar';
import Rockets from '../rockets/Rockets';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
    return () => {
      dispatch(removeAllRockets());
    };
  }, []);

  const rockets = useSelector((state) => state.rocketsReducer);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MyProfile />} />
        <Route path="rockets" element={<Rockets rockets={rockets} />} />
        <Route path="missions" element={<Missions />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
