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
    <div className='res-card'>
      <img
        className='res-logo'
        src={CDN_URL + cloudinaryImageId}
        alt='tes-logo'
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
