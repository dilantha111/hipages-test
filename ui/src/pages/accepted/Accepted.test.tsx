import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Accepted from './Accepted';

const mockJobs = {
  jobs: [
    {
      id: 3,
      status: 'accepted',
      contactName: 'Han Solo',
      contactPhone: '0498765432',
      contactEmail: 'han@mailinator.com',
      price: 45,
      description: 'Test Description.',
      createdAt: '2022-10-08T20:12:52.000Z',
      updatedAt: '2022-10-09T16:34:12.000Z',
      suburb_id: 3,
      category_id: 3,
      Suburb: {
        id: 3,
        name: 'Manly',
        postcode: '2095',
      },
      Category: {
        id: 3,
        name: 'Carpentry',
        parentCategory: 0,
      },
    },
  ],
};

const server = setupServer(
  rest.get('/jobs?status=accepted', (req, res, ctx) => {
    return res(ctx.json(mockJobs));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders accepted page', async () => {
  render(<Accepted />);

  await waitFor(async () => {
    expect(screen.getByText(/Han Solo/i)).toBeInTheDocument();
  });
});
