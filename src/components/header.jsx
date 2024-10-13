import {useState, useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import iconCart from '../assets/images/iconCart.png';
import { toggleStatusTab } from '../stores/cart';
const Header = () => {
  const dispatch = useDispatch();
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector(store => store.cart.items);
useEffect(() =>{
  let total = 0;
  carts.forEach(item => total += item.quantity);
  setTotalQuantity(total);
 },[carts])
const handleCartTab =() =>{
     dispatch(toggleStatusTab())
}

  return (
    <>
      <header className='flex justify-between items-center mb-5'>
        <Link to='/' className='text-xl font-bold text-rose-600 cursor-pointer' >E<span className='text-indigo-800'>STORE</span></Link>
        <div className='w-10 h-10 bg-grey-100 rounded-full
        flex justify-center items-center relative cursor-pointer' onClick ={handleCartTab}>
          <img src={iconCart} className='w-6' />
          <span className='absolute top-2/3 bg-red-500 right-1/2 text-white text-sm
          w-5 h-5 rounded-full flex justify-center items-center '>{totalQuantity}
          </span>

        </div>
      </header> 
    </>
  )
}

export default Header;