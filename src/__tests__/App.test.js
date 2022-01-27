import '@testing-library/jest-dom/extend-expect';
import {
  render, screen, fireEvent, cleanup,
} from '../test-utils';
import App from '../components/app/App';
import store from '../redux/configureStore';
import { removeAllRockets } from '../redux/rockets/rockets';
import { removeAllMissions } from '../redux/missions/missions';

afterEach(cleanup);

test('entire functinality', async () => {
  const { container } = render(<App />);

  await new Promise((resolve) => setTimeout(() => resolve(), 4000));

  let buttons = screen.getAllByText(/Reserve Rocket/i);
  expect(Array.from(buttons).length).toBe(4);

  Array.from(buttons).forEach((button) => fireEvent.click(button));

  buttons = screen.getAllByText(/Cancel Reservation/i);
  expect(Array.from(buttons).length).toBe(4);

  const myProfileLink = screen.getByText('My Profile');
  fireEvent.click(myProfileLink);

  let rocketRows = container.querySelectorAll('td');
  expect(Array.from(rocketRows).length).toBe(4);

  const missionsLink = screen.getByText('Missions');
  fireEvent.click(missionsLink);

  buttons = screen.getAllByText(/Join Mission/i);
  expect(Array.from(buttons).length).toBe(10);

  Array.from(buttons).forEach((button) => fireEvent.click(button));

  buttons = screen.getAllByText(/Leave Mission/i);
  expect(Array.from(buttons).length).toBe(10);

  fireEvent.click(myProfileLink);

  rocketRows = container.querySelectorAll('td');
  expect(Array.from(rocketRows).length).toBe(14);
});

test('renders a link', () => {
  const { container } = render(<App />);
  const linkElements = container.querySelectorAll('a');
  expect(Array.from(linkElements).length).toBe(3);
});
