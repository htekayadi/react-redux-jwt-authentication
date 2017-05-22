let createStoreWithMiddleware = applyMiddleware(thunkMiddleware, api)(createStore)
let store = createStoreWithMiddleware(quotesApp)
let rootElement = document.getElementById('root')

render(
  <Provider store={store}>
    <App />
  </Provider>
  rootElement
)