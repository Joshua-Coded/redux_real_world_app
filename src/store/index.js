import { applyMiddleware, configureStore } from '@reduxjs/toolkit'
import allReducers from "../reducers"
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";

// import { myCustomApiService } from './api'

const store = configureStore({
  reducer: allReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      
      serializableCheck: false,
    }),
}, composeWithDevTools(applyMiddleware(reduxThunk)))

export default store;