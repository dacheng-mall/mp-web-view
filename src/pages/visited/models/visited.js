export default {
  namespace: "visited",
  state: {
    token: '',
    userId: ''
  },
  effects: {},
  reducers: {
    upState(state, { payload }) {
      return { ...state, ...payload };
    },
  }
}