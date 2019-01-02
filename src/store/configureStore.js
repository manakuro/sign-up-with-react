//@flow
import { applyMiddleware, createStore } from 'redux'
import createBrowserHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from 'modules/reducers'

const history = createBrowserHistory()
const middleware = [routerMiddleware(history)]

export default function configureStore() {
  const store = createStore(
    createRootReducer(history),
    applyMiddleware(...middleware),
  )

  return {
    store,
    history,
  }
}
