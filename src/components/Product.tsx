import React, { useState } from 'react'
import { IProduct } from '../models'

interface ProductProps {
  product: IProduct
}

const Product = ({ product }: ProductProps) => {
  const [isDetailsShown, setisDetailsShown] = useState(false)

  const btnBgClass = isDetailsShown ? 'bg-blue-400' : 'bg-yellow-400'
  const btnClasses = ['border-2 font-bold p-2 flex-shrink-0 w-40', btnBgClass]

  return (
    <div className='p-4 border-2 rounded flex flex-col text-base m-2'>
      <img
        className='w-48 h-52 m-auto'
        src={product.image}
        alt={product.title}
      />
      <h3 className='text-center font-bold mt-4 mb-4'>{product.title}</h3>
      <p className='font-bold'>price: {product.price}</p>
      <button
        className={btnClasses.join(' ')}
        onClick={() => setisDetailsShown(!isDetailsShown)}
      >
        {isDetailsShown ? 'Hide Details' : 'Show Details'}
      </button>
      {isDetailsShown && (
        <p>
          <b>description:</b> {product.description}{' '}
        </p>
      )}
      <p>
        <b>category:</b> {product.category}
      </p>
      <div className='flex justify-between'>
        <p className='font-bold'>rating: {product?.rating?.rate}</p>
        <p className='font-bold'>count: {product?.rating?.count}</p>
      </div>
    </div>
  )
}

export default Product
