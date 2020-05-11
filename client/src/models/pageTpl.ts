import { IRootDispatch } from 'ice';

const delay = time => new Promise(resolve => setTimeout(() => resolve(), time));

export default {
  state: {
    list: []
  },

  reducers: {
    increment(prevState) {
      prevState.count += 1;
    },
    decrement(prevState) {
      prevState.count -= 1;
    }
  },

  effects: (dispatch: IRootDispatch) => ({
    async add() {},
    async decrementAsync() {
      await delay(10);
      dispatch.counter.decrement();
    }
  })
};
