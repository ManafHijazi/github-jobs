import { HomeLayout } from '../../Layouts/HomeLayout';

export const AppRoutes = [
  {
    path: '/home',
    name: 'Home',
    component: HomeLayout,
    layout: '',
    isDefault: true,
    isRoute: true,
  },
];
