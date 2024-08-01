import React, { useState } from 'react';
import { ItemListProps, ItemProps } from '../../interfaces/ItemProps';
import ItemComponent from './ItemComponent';


 const Item: React.FC<ItemListProps> = ({ items }) => {
   const [quantities, setQuantities] = useState<number[]>(items.map(() => 0));
  console.log("quantities---", quantities);
  const handleIncrement = (index: number) => {
     setQuantities(quantities.map((quantity, i) => i === index ? quantity + 1 : quantity));
  };

  const handleDecrement = (index: number) => {
     setQuantities(quantities.map((quantity, i) => i === index && quantity > 0 ? quantity - 1 : quantity));
  };
        
 const handleAddCart = (index: number) => {
    alert(items[index].name )
  }

   return (
    <div className='flex flex-col w-screen md:w-5/12 m-auto container overflow-y-scroll'>
      {items.map((item, index) => (
        <ItemComponent
          key={index}
          imageUrl={item?.imageUrl}
          name={item.name}
          description={item?.description}
          quantity = {quantities[index]}
          price={item.price}
          onIncrement={() => handleIncrement(index)}
          onDecrement={() => handleDecrement(index)}
           addCart ={() => handleAddCart(index)}
        />
      ))}
    </div> 
  );
 };

export default Item;