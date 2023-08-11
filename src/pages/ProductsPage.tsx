import React, { useContext } from 'react'
import { useProducts } from '../hooks/products'
import { ModalContext } from '../context/ModalContext'
import { IProduct } from '../models'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'
import Product from '../components/Product'
import Modal from '../components/Modal'
import CreateProduct from '../components/CreateProduct'

const ProductsPage = () => {
  const { products, addProduct, error, isLoading } = useProducts()
  const { isShown, open, close } = useContext(ModalContext)

  const createHandler = (product: IProduct) => {
    addProduct(product)
    close()
  }

  return (
    <div className='parent mx-auto max-w-2xl pt-5'>
      {isLoading && <Loader />}
      {error && <ErrorMessage error={error} />}
      <button
        className='fixed bottom-5 right-20 rounded-full bg-red-700 text-white text-2xl px-4 py-2'
        onClick={open}
      >
        +
      </button>
      {products.map((pr) => (
        <Product product={pr} key={pr.id} />
      ))}
      {isShown && (
        <Modal name='Create Product' onClose={close}>
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}
    </div>
  )
}

export default ProductsPage
