import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the StreamFlow intro page', async () => {
  render(<App />);
  // The intro page is lazy-loaded, so wait for it to appear.
  expect((await screen.findAllByText(/StreamFlow/i)).length).toBeGreaterThan(0);
});
