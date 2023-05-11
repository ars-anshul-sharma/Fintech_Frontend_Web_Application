import Vue from 'vue'
import Router from 'vue-router'
import Landing from "@/components/Home/Landing.vue";
import RegistrationForm from "@/components/RegistrationForm"
import ConfirmPage from "@/components/ConfirmPage"

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import "../css/styles.css";

//  Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.use(Router)


export default new Router({
  routes:[
    
    {
      path: '/',
      name: "Landing",
      component: Landing
    },
    {
      path: '/apply',
      name: "RegistrationForm",
      component: RegistrationForm
    },
    {
      path: '/confirm',
      name: "Confirm",
      component: ConfirmPage
    }

  ]
})



// const routes = [
//   {
//     path: '/',
//     name: 'RegistrationForm',
//     component: RegistrationForm
//   },
//   {
//     path: '/confirm',
//     name: 'ConfirmPage',
//     component: ConfirmPage
//   }
// ]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

// export default router
