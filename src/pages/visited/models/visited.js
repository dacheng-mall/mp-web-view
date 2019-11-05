export default {
  namespace: "visited",
  
  state: {
  },
  effects: {},
  reducers: {
    upState(state, { payload }) {
      return { ...state, ...payload };
    },
  }
}