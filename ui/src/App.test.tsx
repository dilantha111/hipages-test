import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders app', async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  await waitFor(async () => {
    expect(screen.getByText(/Invited/i)).toBeInTheDocument();
    expect(screen.getByText(/Accepted/i)).toBeInTheDocument();
  });
});
