// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const {quantity, price, id} = cartList
      const items = cartList.length
      let cost = 0
      cartList.forEach(eachCartItem => {
        cost += eachCartItem.price * eachCartItem.quantity
      })

      return (
        <div className="cart-summary-con">
          <h1 className="order-total-head">
            Order Total: <span className="cost">Rs {cost}/-</span>
          </h1>
          <p className="items-text">{items} Items in cart</p>
          <button className="checkout-button">Checkout</button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
