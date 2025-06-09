import '@testing-library/jest-dom';
import { act } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import appStore from '../utils/appStore';

import MOCK_DATA from './mocks/mockResInfo.json';

import Cart from '../components/Cart';
import Header from '../components/Header';
import RestaurantInfo from '../components/RestaurantInfo';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA)
  })
);

it('should load RestaurantInfo component', async () => {
  await act(async () =>
    render(
      <BrowserRouter
        future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true
        }}
      >
        <Provider store={appStore}>
          <Header />
          <RestaurantInfo />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText('Veg Pizza (14)');

  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId('foodItem').length).toBe(14);

  expect(screen.getByText('Cart (0)')).toBeIOnTheDocument;

  const addBtn = screen.getAllByRole('button', { name: 'Add +' });

  fireEvent.click(addBtn[0]);

  expect(screen.getByText('Cart (1)')).toBeIOnTheDocument;

  fireEvent.click(addBtn[1]);

  expect(screen.getByText('Cart (2)')).toBeIOnTheDocument;

  expect(screen.getAllByTestId('foodItem').length).toBe(16);

  fireEvent.click(screen.getByRole('button', { name: 'Clear Cart' }));

  expect(screen.getAllByTestId('foodItem').length).toBe(14);

  expect(screen.getByText('Cart is empty. Add items to the Cart!'));
});
