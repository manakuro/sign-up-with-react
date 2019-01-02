//@flow
import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import home from 'modules/home/reducer'

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    home,
  })
}
