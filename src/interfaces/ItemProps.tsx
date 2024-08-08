export interface ItemProps {
  imageUrl?: string | undefined;
  name?: string | undefined;
  description?: string | undefined;
  id?: number | undefined;
  quantity?: number | undefined;
  price?: string | undefined;
  onIncrement: () => void;
  onDecrement: () => void;
  addCart: () => void;
}