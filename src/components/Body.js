import { useEffect, useState } from 'react';

import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.85572432290721&lng=81.03481594473124&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );

    const json = await data.json();

    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListOfRestaurant(restaurants);
    setFilteredListOfRestaurant(restaurants);
  };

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
        {filteredListOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
