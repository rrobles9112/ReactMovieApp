const moviesModule = {
  defaultState: {
    count: 0
  },
  asyncActions:{

  },
  actions: {
    increment: (state, num = 1) => state.count = state.count + num,
    decrement: (state, num = 1) => state.count = state.count - num,
  },
  selectors: {
    countWithActionsAndIsEven: (state, globalState, actions) => ({
      count: state.count,
      isEven: (state.count % 2) === 0,
      actions: actions.counter
    })
  },
  key: 'movies'
}

export default moviesModule;