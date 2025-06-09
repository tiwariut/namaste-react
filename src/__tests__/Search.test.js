import '@testing-library/jest-dom';
import { act } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import MOCK_DATA from './mocks/mockResListData.json';

import Body from '../components/Body';

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    }
  });
});

it('should search restaurant list for burger text input', async () => {
  await act(async () => {
    render(
      <BrowserRouter
        future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true
        }}
      >
        <Body />
      </BrowserRouter>
    );
    0;
  });

  const cardsBeforeSearch = screen.getAllByTestId('resCard');

  expect(cardsBeforeSearch.length).toBe(20);

  const searchBtn = screen.getByRole('button', { name: 'Search' });

  const searchInput = screen.getByTestId('searchInput');

  fireEvent.change(searchInput, { target: { value: 'burger' } });

  fireEvent.click(searchBtn);

  const cardsAfterSearch = screen.getAllByTestId('resCard');

  expect(cardsAfterSearch.length).toBe(2);
});

it('should filter top rated restaurants', async () => {
  await act(async () => {
    render(
      <BrowserRouter
        future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true
        }}
      >
        <Body />
      </BrowserRouter>
    );
    0;
  });

  const cardsBeforeFilter = screen.getAllByTestId('resCard');

  expect(cardsBeforeFilter.length).toBe(20);

  const topRatedBtn = screen.getByRole('button', {
    name: 'Top Rated Restaurants'
  });

  fireEvent.click(topRatedBtn);

  const cardsAfterFilter = screen.getAllByTestId('resCard');

  expect(cardsAfterFilter.length).toBe(12);
});
