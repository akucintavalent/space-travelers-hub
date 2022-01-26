import { render, screen } from '../test-utils';
import '@testing-library/jest-dom/extend-expect';
import App from '../components/app/App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Rockets/i);
  expect(linkElement).toBeInTheDocument();
});
