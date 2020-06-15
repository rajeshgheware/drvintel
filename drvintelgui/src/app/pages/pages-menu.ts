import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/ui-features/dashboard',
    home: true,
  },
  {
    title: 'Anlytics',
    icon: 'edit-2-outline',
    link: '/pages/ui-features/speed-chart',
    children: [
      {
        title: 'Pie Chart',
        icon:'grid-outline',
        link: '/pages/ui-features/speed-chart',
      },
      {
        title: 'Line Chart',
        icon:'grid-outline',
        link: '/pages/ui-features/ngx-lines',
      },
    ],
  },
  {
    title: 'Logout',
    icon: 'log-out',
    link: '/auth/logout',
  },
];
