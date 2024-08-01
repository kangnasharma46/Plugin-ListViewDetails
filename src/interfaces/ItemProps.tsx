export interface ItemProps {
  imageUrl?: string;
  name?: string;
  description?: string;
  id?: number;
  quantity: number;
  price?: string;
  onIncrement: () => void;
  onDecrement: () => void;
  addCart: () => void;
}

export interface ItemListProps {
  items: Omit<ItemProps , 'quantity' | 'onIncrement' | 'onDecrement' | 'addCart'>[];
}
