import type { Product, Products } from '@/types/store'
import { products } from '~~/db.json'

// products as Products

type Maybe<T> = T | null | undefined

export const useProduct = async (productId: number) => {
  const product: Maybe<Product> = products.find(
    (product) => +product.id === +productId,
  )

  const fetchProduct = () => {
    // Optimize any image urls in the data contents
    const { optimizeImage } = useOptimizeImage()

    return product.image
      ? {
          ...product,
          imageOptimized: optimizeImage(product.image),
        }
      : product
  }

  return { product, fetchProduct }
}
