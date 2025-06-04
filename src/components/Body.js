import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import UserContext from '../utils/UserContext';

import RestaurantCard, { withOpenLabel } from './RestaurantCard';
import Shimmer from './Shimmer';

import useOnlineStatus from '../utils/useOnlineStatus';
import useRestaurants from '../utils/useRestaurants';

const Body = () => {
  const [searchText, setSearchText] = useState('');

  const { loggedInUser, setUserName } = useContext(UserContext);

  const onlineStatus = useOnlineStatus();
  const {
    listOfRestaurant,
    filteredListOfRestaurant,
    setFilteredListOfRestaurant
  } = useRestaurants();

  const WithOpenLabel = withOpenLabel(RestaurantCard);

  if (!onlineStatus) {
    return (
      <h1>Looks like you're offline. Please check your internet connection.</h1>
    );
  }

  return !listOfRestaurant.length ? (
    <Shimmer />
  ) : (
    <div className='body'>
      <div className='flex'>
        <div className='search m-4 p-4'>
          <input
            type='text'
            className='border border-solid border-black'
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className='px-4 py-2 bg-green-100 m-4 rounded-lg'
            onClick={() => {
              const filteredRestaurant = listOfRestaurant.filter((restaurant) =>
                restaurant.info.name
                  .toLocaleLowerCase()
                  .includes(searchText.toLocaleLowerCase())
              );

              setFilteredListOfRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className='m-4 p-4'>
          <button
            className='px-4 py-2 bg-green-100 m-4 rounded-lg'
            onClick={() => {
              const filteredList = listOfRestaurant.filter(
                (restaurant) => restaurant.info.avgRating > 4.3
              );
              setFilteredListOfRestaurant(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
          <button
            className='px-4 py-2 bg-slate-200 m-4 rounded-lg'
            onClick={() => setFilteredListOfRestaurant(listOfRestaurant)}
          >
            Remove Filters
          </button>
        </div>
        <div className='m-6 p-6'>
          <label className='mr-2'>Username:</label>
          <input
            className='border border-black p-2'
            onChange={(e) => setUserName(e.target.value)}
            value={loggedInUser}
          />
        </div>
      </div>
      <div className='flex flex-wrap'>
        {filteredListOfRestaurant.map((restaurant) => {
          const { id, isOpen } = restaurant.info;

          return (
            <Link key={id} className='res-link' to={'/restaurants/' + id}>
              {isOpen ? (
                <WithOpenLabel resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
