import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers'
import { persistStore, autoRehydrate } from 'redux-persist'
import { AsyncStorage } from 'react-native';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    {},
    composeEnhancers(
        applyMiddleware(thunk),
        autoRehydrate()
    ));

persistStore(store, {
    storage: AsyncStorage,
    whitelist: ['likedJobs']
})

export default store
