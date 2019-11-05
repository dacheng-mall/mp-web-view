// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  hash: true,
  routes: [
    {
      path: '/',
      component: '../pages/index',
    },
    {
      path: '/visited',
      component: '../pages/visited/index',
      routes: [
        { path: 'detail', component: '../pages/visited/detail' },
        { path: 'ranking', component: '../pages/visited/ranking' },
      ],
    },
    {
      path: '/403',
      component: '../pages/error/403.js'
    }
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: { webpackChunkName: true },
        title: 'web-view',
        dll: false,

        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
};
