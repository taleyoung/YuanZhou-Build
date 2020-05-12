import * as React from 'react';
import { createApp } from 'ice';
import { ConfigProvider } from '@alifd/next';
import PageLoading from '@/components/PageLoading';
import FrameworkLayout from '@/layouts/FrameworkLayout';

const appConfig: any = {
  app: {
    rootId: 'icestark-container',
    addProvider: ({ children }) => (
      <ConfigProvider prefix="next-icestark-">{children}</ConfigProvider>
    )
  },
  router: {
    type: 'browser'
  },
  icestark: {
    type: 'framework',
    Layout: FrameworkLayout,
    getApps: async () => {
      const apps = [
        {
          path: '/bigsale',
          title: '大促会场',
          url: [
            'http://localhost:3334/js/index.js',
            'http://localhost:3334/css/index.css'
          ]
        }
      ];
      return apps;
    },
    appRouter: {
      LoadingComponent: PageLoading
    }
  }
};

createApp(appConfig);
