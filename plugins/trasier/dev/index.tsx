import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { trasierPlugin, TrasierPage } from '../src/plugin';

createDevApp()
  .registerPlugin(trasierPlugin)
  .addPage({
    element: <TrasierPage />,
    title: 'Root Page',
    path: '/trasier'
  })
  .render();
