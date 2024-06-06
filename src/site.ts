// since `.js, .ts` files are not included by default,
// the following comment tells UnoCSS to force scan this file (to pick the logo icon).
// @unocss-include

export default {
  name: 'QuCommerce',
  description: 'Vue Designer Quasar Tailwind CSS',
  logo: 'i-fluent-emoji:shopping-bags',
  author: 'Pinegrow',
  url: 'https://pg-quasar-tailwindcss.netlify.app',
  github: 'https://github.com/pinegrow/pg-quasar-tailwindcss',
  defaultLocale: 'en', // default
  identity: {
    type: 'Organization',
  } as any,
  twitter: '@vuedesigner',
  trailingSlash: false, // default
  titleSeparator: '|', // default
  nav: [
    {
      text: 'Home',
      link: '/',
      type: 'primary',
      icon: 'i-mdi-home',
    },
    {
      text: 'Women',
      link: '/women',
      type: 'primary',
      icon: 'i-mdi-face-woman-shimmer-outline',
    },
    {
      text: 'Men',
      link: '/men',
      type: 'primary',
      icon: 'i-mdi-face-shimmer',
    },
    {
      text: 'Jewellery',
      link: '/jewellery',
      type: 'primary',
      icon: 'i-mdi-crown-outline',
    },
    {
      text: 'Electronics',
      link: '/electronics',
      type: 'primary',
      icon: 'i-mdi-cellphone-iphone',
    },
    {
      text: 'About Us',
      link: '/quick-start',
      type: 'primary',
      icon: 'i-mdi-file',
    },
    {
      text: 'Track Order',
      link: '/track-order',
      type: 'secondary',
      icon: 'i-mdi-map-marker-radius',
    },
    {
      text: 'Order History',
      link: '/order-history',
      type: 'secondary',
      icon: 'i-mdi-history',
    },
    {
      text: 'Returns',
      link: '/returns',
      type: 'secondary',
      icon: 'i-mdi-phone-return-outline',
    },
    {
      text: 'Delivery Policy',
      link: '/delivery-policy',
      type: 'secondary',
      icon: 'i-mdi-truck-delivery-outline',
    },
    {
      text: 'Contact Us',
      link: '/contact-us',
      type: 'secondary',
      icon: 'i-mdi-phone-in-talk-outline',
    },
    {
      text: 'Help & FAQs',
      link: '/help-faqs',
      type: 'secondary',
      icon: 'i-mdi-format-quote-close-outline',
    },
  ],
}
