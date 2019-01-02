import { handleActions } from 'redux-actions'
import type { HomeState } from 'modules/home/types.flow'

const initialState: HomeState = {}

export default handleActions({}, initialState)
