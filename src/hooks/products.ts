import { useEffect, useState } from 'react'
import { IProduct } from '../models'
import axios, { AxiosError } from 'axios'

export function useProducts() {
  const [products, setProducts] = useState<IProduct[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const addProduct = (product: IProduct) => {
    setProducts((prev) => [product, ...prev])
  }

  async function getProducts() {
    try {
      setError('')
      setIsLoading(true)
      const response = await axios.get<IProduct[]>(
        'https://fakestoreapi.com/products'
      )
      setProducts(response.data)
      setIsLoading(false)
    } catch (e: unknown) {
      const error = e as AxiosError
      setIsLoading(false)
      setError(error.message)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return { products, addProduct, error, isLoading }
}
