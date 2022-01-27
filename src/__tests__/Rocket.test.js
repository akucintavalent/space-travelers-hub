import '@testing-library/jest-dom/extend-expect';
import {
  render, screen, fireEvent, cleanup,
} from '../test-utils';
import Rocket from '../components/rocket/Rocket';
import store from '../redux/configureStore';
import { addRocket } from '../redux/rockets/rockets';

afterEach(cleanup);

test('check button reserve rocket', () => {
  render(<Rocket id={1} rocket_name="Rocket 1" description="Descr 1" image="blahblah" reserved={false} />);
  const buttonElement = screen.getByText(/Reserve Rocket/i);
  expect(buttonElement).toBeInTheDocument();
});

test('check button cancel reservation', () => {
  render(<Rocket id={1} rocket_name="Rocket 1" description="Descr 1" image="blahblah" reserved />);
  const buttonElement = screen.getByText(/Cancel Reservation/i);
  expect(buttonElement).toBeInTheDocument();
});

test('click button cancel reservation', () => {
  const rocket = {
    id: 1,
    rocket_name: 'Rocket 1',
    description: 'Descr 1',
    image: 'blahblah',
    reserved: true,
  };
  store.dispatch(addRocket(rocket));
  expect(store.getState().rocketsReducer[0].reserved).toBeTruthy();
  render(<Rocket id={1} rocket_name="Rocket 1" description="Descr 1" image="blahblah" reserved />);
  const buttonElement = screen.getByText(/Cancel Reservation/i);
  fireEvent.click(buttonElement);
  expect(store.getState().rocketsReducer[0].reserved).toBeFalsy();
  expect(buttonElement).toBeInTheDocument();
});
