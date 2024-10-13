import {Link} from 'react-router-dom';
import IconCart from '../assets/images/iconCart.png'
import {useDispatch} from 'react-redux';
import {addToCart} from '../stores/cart.js';

const ProductCart = (prop) => {
// const carts = useSelector(store => store.cart.items);
const Dispatch =useDispatch();
const handleAddToCart = () => {
   Dispatch(addToCart({
    productId: id,
    quantity:1
   }))
}
  const {id, name ,price, image, slug}= prop.data;
  return (
    <>
    <div key={id} className='bg-white p-5 rounded-xl shadow-sm'>
       <Link to={slug}>
          <img src={image} alt="product_image" 
          className='w-full h-80 object-cover object-top 
          drop-shadow-[0_80px_30px_#000]' />
       </Link>
       <h3 className='text-2xl py-3 text-center font-medium'>{name}</h3>
       <div className='flex justify-between items-center'>
        <p>RS<span className='text-2xl font-medium'>{price}</span></p>
        <button onClick={handleAddToCart} className='bg-gray-300 p-2 rounded-md text-sm hover:bg-gray-400'>
          <img src={IconCart} alt="icon_image" className='w-5 ' />
          Add to Cart
        </button>
       </div>
    </div>
    </>
  )
}

export default ProductCart; 