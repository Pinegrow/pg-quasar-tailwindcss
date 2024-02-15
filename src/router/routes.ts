import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/index.vue') },
      {
        path: '/:category',
        component: () => import('pages/[category].vue'),
      },
      {
        path: '/store/:id',
        component: () => import('pages/store/[...id].vue'),
      },
      {
        path: '/quick-start/:slug',
        component: () => import('pages/quick-start/[...slug].vue'),
      },
      {
        path: '/track-order',
        component: () => import('pages/track-order.vue'),
      },
      {
        path: '/order-history',
        component: () => import('pages/order-history.vue'),
      },
      { path: '/returns', component: () => import('pages/returns.vue') },
      {
        path: '/delivery-policy',
        component: () => import('pages/delivery-policy.vue'),
      },
      { path: '/contact-us', component: () => import('pages/contact-us.vue') },
      { path: '/help-faqs', component: () => import('pages/help-faqs.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
