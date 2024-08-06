import React from 'react';
import ShowMore from '../ShowMore/ShowMore';
import { ItemProps } from '../../interfaces/ItemProps';

const ItemComponent: React.FC<ItemProps> = ({ imageUrl, name, quantity, description,price,rating,count,onIncrement, onDecrement, addCart }) => {

  return (
<div className="flex-1 items-center bg-white drop-shadow-lg rounded-lg p-4 mb-4">
 <div className='flex'>
        <div className='w-3/4'>
          {name != undefined && <h2 className="text-l font-bold">{name}</h2>}
          {description != undefined && description?.length > 100 && <ShowMore text={description} />}
          {price != undefined && <h1 className="text-l">Price:-{price}</h1>}
          {rating != undefined && <h1 className="text-m">Rating:- { rating}({count})</h1>}
        </div>
        <div className='flex flex-col'>
        {imageUrl!= undefined && <img className='h-24' src={imageUrl} alt={name} />}  
           <div className="flex mt-1 justify-around border-2 border-rose-200 rounded-2xl">
       <button onClick={onDecrement} className="bg-white-500 text-rose-400 rounded text-3xl font-bold">-</button>
        <span className="mx-2 text-xl text-rose-400">{quantity}</span>
        <button onClick={onIncrement} className="bg-white-500 text-3xl text-rose-400 rounded font-bold">+</button>
          </div>
          <span className="mx-2 text-m px-3 py-1 text-gray-400">Customizable</span>
        </div>
      </div>
      <div className='flex p-2 w-full items-center justify-center'>
<button onClick={addCart} className="w-2/5 mx-2 bg-rose-500 text-white p-2 rounded-xl text-l text-white-400 font-bold rounded-full">Add</button> 
      </div>
         
    </div>
  );
};

export default ItemComponent;
