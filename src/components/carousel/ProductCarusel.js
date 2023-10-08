import React, {useEffect} from 'react'

const ProductCarusel = ({title, products}) => {


  return (
    <div className='flex flex-col my-2 justify-center items-center bg-white shadow-sm'>
      <h4 className='font-bold text-3xl text-center py-6'>{title}</h4>
      <div className='flex p-2 overflow-x-scroll scrollbar-hide w-full relative '>
        
      </div>
    </div>
  )
}

export default ProductCarusel