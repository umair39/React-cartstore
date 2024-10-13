import {useSelector, useDispatch} from 'react-redux';
import CartItem from './cartItem';
import { toggleStatusTab } from '../stores/cart';
const CartTab = () => {
  const statusTab =useSelector(store => store.cart.statusTab)
  const carts = useSelector(store => store.cart.items);
  const dispatch = useDispatch();

  const handleCloseTabCart = () => {
    dispatch(toggleStatusTab());
}
  return (
    <div className={`fixed top-0 right-0 bg-gray-700 shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px] 
      transform transition-transform duration-500
      ${statusTab === false ? "translate-x-full" : ""}
      `}>
    <h2 className='p-5 text-white text-2xl'>Shopping Cart</h2>
    <div>
      {carts.map((cart, key) => 
       <CartItem key={key} data = {cart} />
     )}
    </div>
    <div className='grid grid-cols-2'>
    <button className='bg-white cursor-pointer text-black' onClick={handleCloseTabCart} > Close</button>
    <button className='bg-green-600 cursor-pointer text-white' > Checkout</button>
    </div>
    </div>
  )
}

export default CartTab;