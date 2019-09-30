import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/pages/HelloWorld';
import DisPlay from '@/pages/DisPlay';
import ListPage from '@/pages/ListPage';
import ArtDetail from '@/pages/ArtDetail';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/display',
      name: DisPlay,
      component: DisPlay
    },
    {
      path: '/list',
      name: 'ListPage',
      component: ListPage
    },
    {
      path: '/detail',
      name: 'ArtDetail',
      component: ArtDetail
    }
  ]
})
