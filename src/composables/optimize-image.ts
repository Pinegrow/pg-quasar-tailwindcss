// TODO: Images are not really optimized, have to work on this

import type { ImageOptimized } from '@/types/image'

export const useOptimizeImage = () => {
  const optimizeImage = (src: string, bgStyles = false): ImageOptimized => {
    const sizes = 'xs:100vw sm:100vw md:100vw lg:100vw xl:100vw'
    const srcset = `${src} 768w, ${src} 2560w`
    const imageOptimized: ImageOptimized = Object.assign(
      {},
      {
        src,
        lazySrc: src,
        sizes,
      },
    )

    if (bgStyles) {
      try {
        // https://dev.to/ingosteinke/responsive-background-images-with-image-set-the-srcset-for-background-image-259a
        const responsiveImages = computed(() => {
          return srcset
            .split(', ')
            .filter(
              (imgUrl) => imgUrl.endsWith('768w') || imgUrl.endsWith('2560w'),
            )
        })

        const responsiveImageSrc = `url("${responsiveImages.value[0]}")`

        const responsiveImageSrcImageSet = `image-set(url("${responsiveImages.value[0]}") 1x,url("${responsiveImages.value[1]}") 2x)`

        const responsiveImageSrcImageSetFallback = `-webkit-image-set(url("${responsiveImages.value[0]}") 1x,url("${responsiveImages.value[1]}") 2x)`

        imageOptimized.bgStyles = [
          responsiveImageSrc,
          responsiveImageSrcImageSet,
          responsiveImageSrcImageSetFallback,
        ].reduce((acc, bgStyle) => {
          return `${acc}background-image:${bgStyle};`
        }, '')
      } catch (err) {
        console.log(err)
      }
    }

    return imageOptimized
  }

  return {
    optimizeImage,
  }
}
