import { createRouter, createWebHistory } from 'vue-router'
import Screener from './components/Screener.vue';
import TermsLayout from './components/termsandcondition/TermsLayout.vue';
import Main from './components/payment/main.vue';

const routes = [
  { 
    path: '/', 
    component: Screener,
    // Define name for the home route to make it easier to reference
    name: 'home'
  },
  { path: '/payment', component: Main },
  {
    path: '/terms',
    component: TermsLayout,
    children: [
      { path: 'disclosure', component: ()=> import('/src/components/termsandcondition/disclosure/Disclosure.vue') },
      { path: 't&c', component: ()=> import('/src/components/termsandcondition/t&c/TermsandCondition.vue') },
      { path: 'Disclaimer', component: ()=> import('/src/components/termsandcondition/Disclaimer/Disclaimer.vue') },
      { path: 'refund-policy', component: ()=> import('/src/components/termsandcondition/refundpolicy/RefundPolicy.vue') },
      { path: 'privacy-policy', component: ()=> import('/src/components/termsandcondition/privacypolicy/PrivacyPolicy.vue') },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // If the route has a hash, scroll to that element
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    // Otherwise scroll to top
    return { top: 0 }
  },
})

export default router;