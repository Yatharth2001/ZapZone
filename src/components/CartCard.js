import { useCart } from "../context/CartContext";
import "./CartCard.css"

export const CartCard = ({product}) => {
  const {removefromCart} = useCart();
  const {name, price, image} = product;

  return (
    <div className="cartCard">
      <img src={image} alt="" />
      <p className="productName">{name}</p>
      <p className="productPrice">${price}</p>
      <button onClick={()=>removefromCart(product)}>Remove</button>
    </div>
  )
}
