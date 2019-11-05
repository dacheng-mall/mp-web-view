import { setToken } from '../utils/request';
import { decodeQrcodeQuery, jump } from '../utils';

export default {
  namespace: 'app',
  subscriptions: {
    setup({ history, dispatch }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/') {
          dispatch({
            type: 'login',
            payload: query,
          });
        } else {
          dispatch({
            type: 'relogin',
          });
        }
      });
    },
  },
  state: {
    t: null,
    id: null,
  },
  effects: {
    *login({ payload }, { put }) {
      if (payload.id && payload.p && payload.t) {
        yield put({
          type: 'upState',
          payload,
        });
        localStorage.setItem('t', payload.t);
        localStorage.setItem('id', payload.id);
        localStorage.setItem('p', payload.p);
        setToken(payload.t);
        console.log('ending');
        jump(payload.p);
      }
    },
    *relogin(p, { put, select }) {
      const { t, id } = yield select(({ app }) => app);
      if (t && id) {
        return;
      }
      const _t = localStorage.getItem('t');
      const _id = localStorage.getItem('id');
      if (_t && _id) {
        yield put({
          type: 'upState',
          payload: {
            t: _t,
            id: _id,
          },
        });
        return
      }
      jump('/403')
    },
  },
  reducers: {
    upState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
