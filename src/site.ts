// since `.js, .ts` files are not included by default,
// the following comment tells UnoCSS to force scan this file (to pick the logo icon).
// @unocss-include

export default {
  title: 'QuCommerce',
  description: 'Vue Designer Quasar Tailwind CSS',
  logo: 'i-fluent-emoji:shopping-bags',
  author: 'Pinegrow',
  url: 'https://pg-quasar-tailwindcss.netlify.app',
  github: 'https://github.com/pinegrow/pg-quasar-tailwindcss',
  ogImageUrl: 'og-image.jpg', // absolute url (or) from public folder
  generator: 'https://vuedesigner.com',
  defaultLocale: 'en', // default
  identity: {
    type: 'Organization',
  } as any,
  twitter: '@vuedesigner',
  trailingSlash: false, // default
  titleSeparator: '|', // default
  navs: {
    primary: [
      {
        title: 'Home',
        to: '/',
        icon: 'i-mdi-home',
      },
      {
        title: 'Women',
        to: '/category/women',
        icon: 'i-mdi-face-woman-shimmer-outline',
      },
      {
        title: 'Men',
        to: '/category/men',
        icon: 'i-mdi-face-man-shimmer',
      },
      {
        title: 'Jewellery',
        to: '/category/jewellery',
        icon: 'i-mdi-crown-outline',
      },
      {
        title: 'Electronics',
        to: '/category/electronics',
        icon: 'i-mdi-cellphone',
      },
      {
        title: 'About Us',
        to: '/quick-start',
        icon: 'i-mdi-file',
      },
    ],
    secondary: [
      {
        title: 'Track Order',
        to: '/track-order',
        icon: 'i-mdi-map-marker-radius',
      },
      {
        title: 'Order History',
        to: '/order-history',
        icon: 'i-mdi-history',
      },
      {
        title: 'Returns',
        to: '/returns',
        icon: 'i-mdi-phone-return-outline',
      },
      {
        title: 'Delivery Policy',
        to: '/delivery-policy',
        icon: 'i-mdi-truck-delivery-outline',
      },
      {
        title: 'Contact Us',
        to: '/contact-us',
        icon: 'i-mdi-phone-in-talk-outline',
      },
      {
        title: 'Help & FAQs',
        to: '/help-faqs',
        icon: 'i-mdi-format-quote-close-outline',
      },
    ],
  },
}
