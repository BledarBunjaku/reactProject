import {createStore, combineReducers} from 'redux'
import loginReducer from './loginReducer'
import registerReducer from './registerReducer'

const reducers = combineReducers({
    registerReducer,
    loginReducer
})

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store