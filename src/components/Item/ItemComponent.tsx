import React from 'react';
import ShowMore from '../ShowMore/ShowMore';
import { ItemProps } from '../../interfaces/ItemProps';

const ItemComponent: React.FC<ItemProps> = ({ imageUrl, name, quantity, description,price, onIncrement, onDecrement, addCart }) => {

  return (
<div className="flex-1 items-center bg-white drop-shadow-lg rounded-lg p-4 mb-4">
      <div className='flex'>
        {imageUrl !== undefined && <img src={imageUrl} alt={name} className="w-24 h-24 rounded-xl mr-4" />}
        
      <div className="flex-1">
          {name !== undefined && <h2 className="text-l font-bold">{name}</h2>}
           {description !== undefined &&  <ShowMore text={description} />}
                  </div>
  
                  </div>
      <div className='flex items-center'>
        {price !== undefined && <span className='w-1/4 py-2 mx-1 text-l text-slate-400 font-bold items-center'>${price}</span>}
        <div className="flex mx-2 w-3/6 p-2 justify-around border-2 border-slate-200 rounded-2xl">
        <button onClick={onDecrement} className="bg-white-500 text-slate-400 py-1 px-3 rounded text-3xl text-slate-400 font-bold">-</button>
        <span className="mx-2 text-xl px-3 py-1">{quantity}</span>
        <button onClick={onIncrement} className="bg-white-500 text-3xl text-slate-400 py-1 px-3 rounded font-bold">+</button>
        </div>
        <button onClick={addCart} className="w-1/4 mx-2 bg-orange-500 text-white p-2 rounded-xl text-l text-white-400 font-bold rounded-full">Add</button>                   
      </div> 
      
    </div>
  );
};

export default ItemComponent;
