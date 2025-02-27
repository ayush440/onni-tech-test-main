import { createRouter, createWebHistory } from 'vue-router'
import Screener from './components/Screener.vue';
import TermsLayout from './components/termsandcondition/TermsLayout.vue';
// import Disclosure from './components/Disclosure.vue';
// import TermsandCondition from './components/TermsandCondition.vue';
// import Disclaimer from './components/Disclaimer.vue';
// import RefundPolicy from './components/RefundPolicy.vue';
// import PrivacyPolicy from './components/PrivacyPolicy.vue';


const routes = [
  { path: '/', component: Screener },

  {
    path: '/terms',
    component: TermsLayout ,
    children: [
      { path: 'disclosure', component: ()=> import('/src/components/termsandcondition/disclosure/Disclosure.vue') },
      { path: 't&c', component: ()=> import('/src/components/termsandcondition/t&c/TermsandCondition.vue') },
      { path: 'disclaimer', component: ()=> import('/src/components/termsandcondition/disclaimer/Disclaimer.vue') },
      { path: 'refund-policy', component: ()=> import('/src/components/termsandcondition/refundpolicy/RefundPolicy.vue') },
      { path: 'privacy-policy', component: ()=> import('/src/components/termsandcondition/privacypolicy/PrivacyPolicy.vue') },
      
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top
    return { top: 0 }
  },
})

export default router;