import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)

import contentnav  from '@/views/comment/contentnav';

export const constantRouterMap = [{
  path: '/login',
  component: () =>
    import ('@/views/login/index'),
	 meta: { title: '登录',name:'login' },
},
{
  path: '/404',
  component: () =>
    import ('@/views/404'),
		meta: {title: '404',name:'404'},
},
{
  path: '',
	name: '/',
  component:contentnav,
		meta: {title: '首页',name:'/'},
  redirect: '/home',
  children: [{
    path: 'home',
    name: 'home',
    component: resolve => require(['@/views/home/index'], resolve),
    meta: {
      title: '首页',
      icon: 'home',
			name:'home'

    }
  }]
},
{  //商品模块
  path: '/product/list',
	name: '商品',
 component:contentnav,
	meta: {title: '商品',name:'商品'},
  children: [{
    path: '/product/list',
    name: '商品列表',
    component: resolve => require(['@/views/product/list'], resolve),
    meta: {
      title: '商品列表',
      icon: 'list',
			name:'商品列表'
		
    }
  },
	{
	  path: '/product/add',
	  name: '添加商品',
	  component: resolve => require(['@/views/product/add'], resolve),
	  meta: {
	    title: '添加商品',
	    icon: 'add',
			name:'添加商品'
	  }
	}]
},
//  {
//   path: '/product/list',
// 	name: '/product/list',
//   component: resolve => require(['@/views/product/list'], resolve),
// 		meta: {title: '商品列表',name:'product/list',keepAlive: false},
// },
{
  path: '*',
  redirect: '/404',
  hidden: true
}]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})
