import '@testing-library/jest-dom/extend-expect';
// import userEvent from '@testing-library/user-event';
import {
  render, screen, fireEvent, cleanup,
} from '../test-utils';
import Rockets from '../components/rockets/Rockets';
import store from '../redux/configureStore';
import { addRocket } from '../redux/rockets/rockets';

afterEach(cleanup);

test('renders learn react link', () => {
  render(<Rockets rockets={[{
    id: 1,
    rocket_name: 'Rocket 1',
    description: 'Descr 1',
    flickr_images: 'blahblah',
  }]}
  />);
  const buttonElement = screen.getByText(/Reserve Rocket/i);
  expect(buttonElement).toBeInTheDocument();
});

test('reserving a rocket', () => {
  const rocket = {
    id: 1,
    rocket_name: 'Rocket 1',
    description: 'Descr 1',
    flickr_images: 'blahblah',
  };
  store.dispatch(addRocket(rocket));
  expect(store.getState().rocketsReducer[0].reserved).toBeUndefined();
  render(<Rockets rockets={[rocket]} />);
  const buttonElement = screen.getByText(/Reserve Rocket/i);
  fireEvent.click(buttonElement);
  expect(store.getState().rocketsReducer[0].reserved).toBeTruthy();
  expect(buttonElement).toBeInTheDocument();
});
