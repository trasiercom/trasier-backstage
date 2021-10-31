import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const trasierPlugin = createPlugin({
  id: 'trasier',
  routes: {
    root: rootRouteRef,
  },
});

export const TrasierPage = trasierPlugin.provide(
  createRoutableExtension({
    name: 'TrasierPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
