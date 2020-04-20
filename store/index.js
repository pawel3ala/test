import { createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers'
import devToolsEnhancer from 'remote-redux-devtools';
import { composeWithDevTools } from 'remote-redux-devtools';

const store = createStore(
    reducers,
    {},
    composeWithDevTools(
        applyMiddleware(thunk),
    )
)

store.subscribe(()=> {
    console.log("Store state has been changed", store.getState())
})
export default store
