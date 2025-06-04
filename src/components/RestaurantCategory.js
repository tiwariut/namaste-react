import { useState } from 'react';
import ItemList from './ItemList';

const RestaurantCategory = ({ data, showItems, updateShowIndex }) => {
  return (
    <div className='w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4'>
      <div
        className=' flex justify-between cursor-pointer'
        onClick={() => updateShowIndex()}
      >
        <span className='font-bold text-lg'>
          {data.title} ({data.itemCards.length})
        </span>
        <span>{showItems ? '⬆️' : '⬇️'}</span>
      </div>

      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
