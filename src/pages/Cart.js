import { useTitle } from "../hooks/useTitle"
import { CartCard } from "../components"
export const Cart = () => {
  useTitle("Cart")

  

  const products = [
    {"id": 5, "name": "APPLE Airpods Max Bluetooth Headset", "price": 199, "image": "/assets/images/1005.png"},
    {"id": 6, "name": "ZEBRONICS Zeb-Thunder Wired", "price": 29, "image": "/assets/images/1006.png"}

  ]
  return (
    <main>
      <section className="cart">
        <h1>Cart Items: {products.length}</h1>
        {products.map((product)=>(
          <CartCard key={product.id} product={product}/>
        ))}
        
      </section>
    </main>
  )
}
