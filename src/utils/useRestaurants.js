import { useEffect, useState } from 'react';

const useRestaurants = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
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

  return {
    listOfRestaurant,
    filteredListOfRestaurant,
    setFilteredListOfRestaurant
  };
};

export default useRestaurants;
