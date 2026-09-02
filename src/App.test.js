import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the StreamFlow intro page', () => {
  render(<App />);
  expect(screen.getAllByText(/StreamFlow/i).length).toBeGreaterThan(0);
});
