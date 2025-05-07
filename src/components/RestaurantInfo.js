import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Shimmer from './Shimmer';

import { MENU_API } from '../utils/constants';

const RestaurantInfo = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchResInfo();
  }, []);

  const fetchResInfo = async () => {
    const data = await fetch(MENU_API + resId);

    const json = await data.json();

    setResInfo(json.data);
  };

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

  return (
    <div className='menu'>
      <h1>{name}</h1>
      <p>
        {cuisines.join(', ')} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>

      <ul>
        {itemCards.map((item) => {
          const { id, name, price, defaultPrice } = item.card.info;
          return (
            <li key={id}>
              {name} - Rs.{price / 100 || defaultPrice / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantInfo;
