import { legacy_createStore as createStore } from 'redux'
import {compose,combineReducers,applyMiddleware} from 'redux';

// import thunk from 'redux-thunk';
import {thunk} from 'redux-thunk';
const rootReducer = combineReducers({

})

const middleware = [thunk];

const store = createStore(rootReducer,compose(applyMiddleware(...middleware),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ));

export 
default store;