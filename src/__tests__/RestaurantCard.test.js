import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import MOCK_DATA from './mocks/resCardMocks.json';

import RestaurantCard, { withOpenLabel } from '../components/RestaurantCard';

it('should render RestaurantCard component with props data', () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText('Theobroma');

  expect(name).toBeInTheDocument();
});

it('should render RestaurantCard component with Open label', () => {
  const WithOpenLabel = withOpenLabel(RestaurantCard);

  render(<WithOpenLabel resData={MOCK_DATA} />);

  const name = screen.getByText('Open');

  expect(name).toBeInTheDocument();
});
