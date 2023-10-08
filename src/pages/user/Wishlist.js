import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {AiOutlineDelete} from 'react-icons/ai'
import emptyWishlist from '../../images/empty_wishlist.svg'

const Wishlist = () => {

  const {user} = useSelector((state) => ({...state}));
  const [wishlist, setWishlist] = useState([]);


  return (
    <div className=''>
      <h4 className='text-2xl text-center my-5  font-semibold'>My Wishlist</h4>
      <hr />
      <div className="wishlist-card flex flex-wrap mt-10 p-2 justify-center">
        {!wishlist.length ? 
          <div className="flex flex-col justify-center items-center w-full h-full">
            <img src={emptyWishlist} alt="img" className='my-2' />
            <div className="my-2 text-lg font-semibold">Oops! Your Wishlist is Empty</div>
          </div>
         : 
          wishlist.map(p => (
            <div className=""></div>
          ))
        }
      </div>
    </div>
  )
}

export default Wishlist