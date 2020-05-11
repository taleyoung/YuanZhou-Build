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
  request: {
    baseURL: 'http://127.0.0.1:7001',
    headers: {},
    interceptors: {
      request: {},
      response: {
        onConfig: (response: any) => {
          // 请求成功：可以做全局的 toast 展示，或者对 response 做一些格式化
          // if (!response.data.status !== 1) {
          //   alert('请求失败');
          // }
          return response;
        },
        onError: error => {
          // 请求出错：服务端返回错误状态码
          // console.log(error.response.data);
          // console.log(error.response.status);
          // console.log(error.response.headers);
          return Promise.reject(error);
        }
      }
    }
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
          path: '/seller',
          title: '商家平台',
          // React app demo: https://github.com/ice-lab/icestark-child-apps/tree/master/child-seller-react-16
          url: [
            '//ice.alicdn.com/icestark/child-seller-react/index.js',
            '//ice.alicdn.com/icestark/child-seller-react/index.css'
          ]
        },
        {
          path: '/waiter',
          title: '小二平台',
          url: [
            // Vue app demo: https://github.com/ice-lab/icestark-child-apps/tree/master/child-waiter-vue-2
            '//ice.alicdn.com/icestark/child-waiter-vue/app.js',
            '//ice.alicdn.com/icestark/child-waiter-vue/app.css'
          ]
        },
        {
          path: '/angular',
          title: 'Angular',
          // Angular app demo: https://github.com/ice-lab/icestark-child-apps/tree/master/child-common-angular-9
          entry: '//ice.alicdn.com/icestark/child-common-angular/index.html'
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
