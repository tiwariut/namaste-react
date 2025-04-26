import { useState } from 'react';

import RestaurantCard from './RestaurantCard';

import { resList } from '../utils/mockData';

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);

  return (
    <div className='body'>
      <div className='filter'>
        <button
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (restaurant) => restaurant.info.avgRating > 4.3
            );
            setListOfRestaurant(filteredList);
          }}
          className='filter-btn'
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className='res-container'>
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
