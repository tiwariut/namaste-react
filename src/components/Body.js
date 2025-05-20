import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';

import useOnlineStatus from '../utils/useOnlineStatus';
import useRestaurants from '../utils/useRestaurants';

const Body = () => {
  const [searchText, setSearchText] = useState('');

  const onlineStatus = useOnlineStatus();
  const {
    listOfRestaurant,
    filteredListOfRestaurant,
    setFilteredListOfRestaurant
  } = useRestaurants();

  if (!onlineStatus) {
    return (
      <h1>Looks like you're offline. Please check your internet connection.</h1>
    );
  }

  return !listOfRestaurant.length ? (
    <Shimmer />
  ) : (
    <div className='body'>
      <div className='filter'>
        <div className='search'>
          <input
            type='text'
            className='search-box'
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
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
        <button
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (restaurant) => restaurant.info.avgRating > 4.3
            );
            setFilteredListOfRestaurant(filteredList);
          }}
          className='filter-btn'
        >
          Top Rated Restaurant
        </button>
        <button
          className='filter-btn'
          onClick={() => setFilteredListOfRestaurant(listOfRestaurant)}
        >
          Remove Filters
        </button>
      </div>
      <div className='res-container'>
        {filteredListOfRestaurant.map((restaurant) => {
          const { id } = restaurant.info;

          return (
            <Link key={id} className='res-link' to={'/restaurants/' + id}>
              <RestaurantCard resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
