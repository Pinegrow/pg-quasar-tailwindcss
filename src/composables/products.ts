import { products } from '~~/db.json'

export const useProducts = async () => {
  const categories = [...new Set(products.map((product) => product.category))]

  const badges = [
    ...new Set(
      products
        .filter((product) => product.badge)
        .map((product) => product.badge),
    ),
  ]

  const fetchCategory = (category?: string) => {
    // Optimize any image urls in the data contents
    const { optimizeImage } = useOptimizeImage()

    return products
      .filter((product) => !category || product.category === category)
      .map((product) =>
        product.image
          ? {
              ...product,
              imageOptimized: optimizeImage(product.image),
            }
          : product,
      )
  }

  return { products, categories, badges, fetchCategory }
}
