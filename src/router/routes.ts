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
        path: 'services',
        children: [
          {
            path: 'objects',
            component: () => import('pages/ServiceComp.vue'),
            name: 'objects',
          },
          {
            path: 'cargo',
            component: () => import('src/pages/ServiceComp.vue'),
            name: 'cargo',
          },
          {
            path: 'personal',
            component: () => import('src/pages/ServiceComp.vue'),
            name: 'personal',
          },
          {
            path: 'events',
            component: () => import('src/pages/ServiceComp.vue'),
            name: 'events',
          },
        ],
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
          import(/* webpackChunkName: "home" */ 'src/pages/PagesContacts.vue'),
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
