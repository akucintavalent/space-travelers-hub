import '@testing-library/jest-dom/extend-expect';
import { render, screen, cleanup } from '../test-utils';
import MyProfile from '../components/my_profile/MyProfile';
import store from '../redux/configureStore';
import { addRocket, reserveRocket } from '../redux/rockets/rockets';
import { addMission, joinMission } from '../redux/missions/missions';

afterEach(cleanup);

test('renders learn react link', () => {
  render(<MyProfile />);
  const textElement = screen.getByText(/Rockets/i);
  expect(textElement).toBeInTheDocument();
});

test('testing store and displaying its content in my profile', () => {
  const mission1 = { mission_id: 'ababahalamaga', mission_name: 'Mission 1', description: 'Description' };
  const mission2 = { mission_id: 'ololalaleleleili', mission_name: 'Mission 2', description: 'Description' };
  store.dispatch(addMission(mission1));
  store.dispatch(addMission(mission2));
  const rocket1 = {
    id: 1,
    rocket_name: 'Rocket 1',
    description: 'Descr 1',
    flickr_images: 'blahblah',
  };
  const rocket2 = {
    id: 2,
    rocket_name: 'Rocket 2',
    description: 'Descr 1',
    flickr_images: 'blahblah',
  };
  const rocket3 = {
    id: 3,
    rocket_name: 'Rocket 3',
    description: 'Descr 1',
    flickr_images: 'blahblah',
  };
  store.dispatch(addRocket(rocket1));
  store.dispatch(addRocket(rocket2));
  store.dispatch(addRocket(rocket3));
  store.dispatch(joinMission(mission1));
  store.dispatch(reserveRocket(rocket2));
  render(<MyProfile />);
  let textElement = screen.getByText(/Rocket 2/i);
  expect(textElement).toBeInTheDocument();
  expect(() => { screen.getByText(/Rocket 1/i); }).toThrow();
  textElement = screen.getByText(/Mission 1/i);
  expect(textElement).toBeInTheDocument();
  expect(() => { screen.getByText(/Mission 2/i); }).toThrow();
});
