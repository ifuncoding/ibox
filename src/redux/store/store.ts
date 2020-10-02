import {createStore} from 'redux'
import {persistReducer, persistStore} from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
import reducers from '../Reducers'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    timeout: 0,
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(
    persistedReducer,
    // @ts-ignore
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
        // @ts-ignore
        (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
)

const persistor = persistStore(store)

// persistor.purge()

export {store, persistor}
