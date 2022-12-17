import { Size, Color } from "./product";

export interface CartItem {
  id: string, 
  productName: string, 
  imageUrl: string, 
  price: number, 
  quantity: number;
  color: Color;
  size: Size;
  // type: string; 
}

export interface Cart {
  cartItems: Array<CartItem>;
}
