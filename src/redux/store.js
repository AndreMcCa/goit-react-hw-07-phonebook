import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { 
  persistStore, 
  persistReducer, 
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'

import contactsReducer from './contacts-reducer';

// const initialState = {
//    contacts: {
//     items: [],
//     filter: ''
//   }
// };

const middleware = [...getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
  }
}), logger];

const rootReduscer = combineReducers({
  contacts: contactsReducer
})


const store = configureStore({
   reducer: rootReduscer,
   devTools: process.env.NODE_ENV === 'development',
   middleware,
})

// const persistor = persistStore(store);

// export default {persistor, store};

export default store