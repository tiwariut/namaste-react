import { useParams } from 'react-router-dom';

import Shimmer from './Shimmer';

import useRestaurantInfo from '../utils/useRestaurantInfo';
import RestaurantCategory from './RestaurantCategory';
import { useState } from 'react';

const RestaurantInfo = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantInfo(resId);

  const [showIndex, setShowIndex] = useState(0);

  if (!resInfo) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  let { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  if (!itemCards) {
    ({ itemCards } =
      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);
  }

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (val) =>
        val.card?.card?.['@type'] ===
        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    );

  const updateShowIndex = (index) => {
    if (index === showIndex) {
      setShowIndex(null);
    } else {
      setShowIndex(index);
    }
  };

  return (
    <div className='text-center'>
      <h1 className='font-bold my-6 text-2xl'>{name}</h1>
      <p className='font-bold text-lg'>
        {cuisines.join(', ')} - {costForTwoMessage}
      </p>

      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.categoryId}
          data={category?.card?.card}
          showItems={showIndex === index}
          updateShowIndex={() => updateShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantInfo;
