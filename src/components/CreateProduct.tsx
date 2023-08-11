import React, { useState } from 'react'
import { IProduct } from '../models'
import axios from 'axios'
import ErrorMessage from './ErrorMessage'
import Loader from './Loader'

const productData: IProduct = {
  title: '',
  price: 13.5,
  description: 'lorem ipsum set',
  image: 'https://i.pravatar.cc',
  category: 'electronic',
  rating: {
    rate: 42,
    count: 10,
  },
}

interface CreateProductProps {
  onCreate: (product: IProduct) => void
}

const CreateProduct = ({ onCreate }: CreateProductProps) => {
  const [productTitle, setProductTitle] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault()
    setError('')

    if (productTitle.trim().length === 0) {
      setError("Title can't be empty!")
      return
    }

    setLoading(true)
    productData.title = productTitle
    const response = await axios.post<IProduct>(
      'https://fakestoreapi.com/products',
      productData
    )
    setLoading(false)
    onCreate(response.data)
  }

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductTitle(event.target.value)
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type='text'
        className='border py-2 px-4 mb-2 w-full outline-none'
        placeholder='Enter product title...'
        value={productTitle}
        onChange={changeHandler}
      />
      {error && <ErrorMessage error={error} />}
      {loading && <Loader />}
      <button
        type='submit'
        className='py-2 px-4 border bg-yellow-400 font-bold hover:text-white'
      >
        Create Product
      </button>
    </form>
  )
}

export default CreateProduct
