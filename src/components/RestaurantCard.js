import { CDN_URL } from '../utils/constants';

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla: { deliveryTime }
  } = resData?.info;

  return (
    <div
      data-testid='resCard'
      className='m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-200 rounded-lg'
    >
      <img
        className='rounded-lg'
        src={CDN_URL + cloudinaryImageId}
        alt='tes-logo'
      />
      <h3 className='font-bold py-4 text-l'>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

export const withOpenLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className='absolute bg-black text-white m-2 p-2 rounded-lg'>
          Open
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
