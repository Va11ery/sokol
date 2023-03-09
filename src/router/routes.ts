import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('pages/IndexPage.vue'),
      },
      {
        path: 'about',
        name: 'about',
        component: () =>
          import(/* webpackChunkName: "home" */ 'pages/AboutCompany.vue'),
      },
      {
        path: 'service',
        name: 'service',
        component: () =>
          import(/* webpackChunkName: "home" */ 'pages/ServiceCompany.vue'),
      },
      {
        path: 'clients',
        name: 'clients',
        component: () =>
          import(/* webpackChunkName: "home" */ 'pages/ClientsCompany.vue'),
      },
      {
        path: 'teams',
        name: 'teams',
        component: () =>
          import(/* webpackChunkName: "home" */ 'pages/TeamsCompany.vue'),
      },
      {
        path: 'contacts',
        name: 'contacts',
        component: () =>
          import(/* webpackChunkName: "home" */ 'pages/Contacts.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
