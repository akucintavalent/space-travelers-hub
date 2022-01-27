import '@testing-library/jest-dom/extend-expect';
import {
  render, screen, fireEvent, cleanup,
} from '../test-utils';
import Missions from '../components/missions/Missions';
import store from '../redux/configureStore';
import { addMission } from '../redux/missions/missions';

afterEach(cleanup);

test('renders learn react link', () => {
  render(<Missions missions={[{ mission_id: 'blahblah', mission_name: 'Mission 1', description: 'Description' }]} />);
  const buttonElement = screen.getByText(/Join Mission/i);
  expect(buttonElement).toBeInTheDocument();
});

test('joining a mission', () => {
  const mission = { mission_id: 'ababahalamaga', mission_name: 'Mission 1', description: 'Description' };
  store.dispatch(addMission(mission));
  expect(store.getState().missionsReducer[0].reserved).toBeUndefined();
  render(<Missions missions={[mission]} />);
  const buttonElement = screen.getByText(/Join Mission/i);
  fireEvent.click(buttonElement);
  expect(store.getState().missionsReducer[0].reserved).toBeTruthy();
  expect(buttonElement).toBeInTheDocument();
});
