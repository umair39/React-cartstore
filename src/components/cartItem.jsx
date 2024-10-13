import {products} from '../projects';
import { useEffect, useState } from 'react';
import{changeQuantity} from '../stores/cart';
import {useDispatch} from 'react-redux'
const CartItem = (prop) => {
  const dispatch = useDispatch();
 
  
 
const {productId, quantity} = prop.data;
const [detail, setDetail] = useState([]);
useEffect(()=> {
  const product1 = products.filter((product) => product.id === productId)[0];
  setDetail(product1);
 },[productId])

 const handleMinusQuantity = () => {
  dispatch(changeQuantity({
    productId: productId,
    quantity:quantity -1,
 }))
}
const handlePlusQuantity = () => {
  dispatch(changeQuantity({
    productId: productId,
    quantity: quantity +1,
  }))
}


  return (
    <div className='flex justify-between items-center bg-slate-600 text-white p-2  border-b-2 border-slate-700 gap-5 rounded-md'>
    <img src={detail.image} alt='cart_img' className='w-12' />  
    <h3>{detail.name}</h3>
    <p>RS {detail.price*quantity}</p>
    <div className='w-20 flex justify-between'>
     <button className='bg-gray-200 rounded-full w-6 h-6 text-cyan-600' onClick={handleMinusQuantity}>-</button>
      <span>{quantity}</span>
     <button className='bg-gray-200 rounded-full w-6 h-6 text-cyan-600' onClick ={handlePlusQuantity}>+</button>
    </div>

    </div>
  )
}

export default CartItem;