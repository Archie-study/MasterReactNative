import React from "react";
import 'react-native-gesture-handler'
import { SafeAreaProvider } from "react-native-safe-area-context";
import MainNavigator from "./src/navigator/MainNavigator";

import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import { profileReducer } from "./store/reducers/profileReducer";


const rootReducer = combineReducers({
  // your reducer collection
  profileReducer: profileReducer
})

const store = createStore(rootReducer);

// const store = configureStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <MainNavigator />
      </SafeAreaProvider>
    </Provider>
  )
}

export default App;