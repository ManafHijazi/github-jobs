import { JobDetailsView, RecentOpeningsView } from '../../views';

export const HomeRoutes = [
  {
    path: '/recent-openings',
    name: 'RecentOpenings',
    component: RecentOpeningsView,
    layout: '/home',
    isDefault: true,
    isRoute: true,
  },
  {
    path: '/job-details',
    name: 'JobDetails',
    component: JobDetailsView,
    layout: '/home',
    isDefault: false,
    isRoute: true,
  },
];
