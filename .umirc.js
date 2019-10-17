// ref: https://umijs.org/config/
//?id=052914a27a6947efb64b75df6b4ed1fc&t=Bearer%20eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA1MjkxNGEyN2E2OTQ3ZWZiNjRiNzVkZjZiNGVkMWZjIiwibmFtZSI6IumyuOmxvOS4jeaYr-mxvCIsInVzZXJuYW1lIjoibzMwY1o0MHBjM0FIZ19HQXhhRmxOOXNJNGxKWSIsInVzZXJUeXBlIjo0LCJpbnN0aXR1dGlvbklkIjoiNGQ4M2YwYjc1NGY0NDJiYjgwYWEzMGFkZmI2Njg5ZTciLCJ0aW1lIjoxNTcxMjg2NjE1NTkxLCJpYXQiOjE1NzEyODY2MTUsImV4cCI6MTU3MTg5MTQxNX0.cnWlHzb9ubuTVnClx4HvtWPn1XzlKHQvtlgaDTY8Vdo
export default {
  treeShaking: true,
  routes: [
    {
      path: '/',
      routes: [
        { path: '/', component: '../pages/index' },
        { path: 'visited', component: '../pages/visited/index' },
      ],
    },
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: false,
        dva: true,
        dynamicImport: { webpackChunkName: true },
        title: 'web-view',
        dll: true,

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
