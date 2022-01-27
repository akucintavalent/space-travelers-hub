import '@testing-library/jest-dom/extend-expect';
import {
  render, screen, fireEvent, cleanup,
} from '../test-utils';
import Mission from '../components/mission/Mission';
import store from '../redux/configureStore';
import { addMission } from '../redux/missions/missions';

afterEach(cleanup);

test('check button join mission', () => {
  render(
    <table>
      <tbody><Mission mission_id="hello" mission_name="Mission 1" description="Desc 1" reserved={false} /></tbody>
    </table>,
  );
  const buttonElement = screen.getByText(/Join Mission/i);
  expect(buttonElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(
    <table>
      <tbody><Mission mission_id="hello" mission_name="Mission 1" description="Desc 1" reserved={false} /></tbody>
    </table>,
  );
  const buttonElement = screen.getByText(/Join Mission/i);
  expect(buttonElement).toBeInTheDocument();
});

test('joining a mission', () => {
  const mission = {
    mission_id: 'ababahalamaga',
    mission_name: 'Mission 1',
    description: 'Description',
    reserved: true,
  };
  store.dispatch(addMission(mission));
  expect(store.getState().missionsReducer[0].reserved).toBeTruthy();
  render(
    <table>
      <tbody>
        <Mission
          mission_id={mission.mission_id}
          mission_name={mission.mission_name}
          description={mission.description}
          reserved={mission.reserved}
        />
      </tbody>
    </table>,
  );
  const buttonElement = screen.getByText(/Leave Mission/i);
  fireEvent.click(buttonElement);
  expect(store.getState().missionsReducer[0].reserved).toBeFalsy();
  expect(buttonElement).toBeInTheDocument();
});
