export default {
  namespace: 'visitedDetail',
  subscriptions: {
    setup({ dispatch, history }) {
      console.log('visitedDetail sub')
      return history.listen(({ pathname }) => {
        if (pathname === '/visited/detail') {
          dispatch({ type: 'init' });
        }
      });
    },
  },
  state: {},
  effects: {
    *init() {
      const id = localStorage.getItem('id');
      const path = localStorage.getItem('path');
      const token = localStorage.getItem('token');
      console.log('init', id, path, token);

    },
  },
  reducers: {
    upState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
