import {createApp} from 'ice';

const appConfig: any = {
  router: {
    type: 'browser',
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
  icestark: {
    type: 'child',
  },
};

createApp(appConfig);