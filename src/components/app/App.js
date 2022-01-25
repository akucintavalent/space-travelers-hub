import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Missions from '../missions/Missions';
import MyProfile from '../my_profile/MyProfile';
import Navbar from '../navbar/Navbar';
import Rockets from '../rockets/Rockets';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<MyProfile />} />
      <Route path="rockets" element={<Rockets />} />
      <Route path="missions" element={<Missions />} />
    </Routes>
  </BrowserRouter>
);

export default App;
