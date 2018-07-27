import Vue from 'vue'
import Router from 'vue-router'
import ProDetail from '../components/ProductDetail'
import Content from '../components/MainContent'
import SearchResult from '../components/SearchResult'
import ProductCart from '../components/ProductCart'

import Login from '../components/user/Login'
import Register from '../components/user/Register'
import AdminIndex from '../components/admin/AdminIndex'
import AdminUser from '../components/admin/AdminUser'
import AdminProduct from '../components/admin/AdminProduct'
import AdminOrder from '../components/admin/AdminOrder'
import AdminClassify from '../components/admin/AdminClassify'
import AdminMain from '../components/admin/AdminMain'
import AdminSpecific from '../components/admin/AdminSpecific'
import AdminSpecificTmp from '../components/admin/AdminSpecificTmp'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MainContent',
      component: Content

    },
    {
      path: '/searchResult',
      name: 'SearchResult',
      component: SearchResult
    },
    {
      path: '/productCart',
      name: 'ProductCart',
      component: ProductCart
    },
    {
      path: '/proDetail',
      name: 'ProDetail',
      component: ProDetail
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/admin',
      name: 'AdminIndex',
      component: AdminIndex,
      children: [
        {path: '/admin/user', component: AdminUser},
        {path: '/admin/order', component: AdminOrder},
        {path: '/admin/product', component: AdminProduct},
        {path: '/admin/classify', component: AdminClassify},
        {path: '/admin/specific', component: AdminSpecific},
        {path: '/admin/specificTmp', component: AdminSpecificTmp},
        {path: '/admin/', component: AdminMain},
      ]


    }
  ]
})
