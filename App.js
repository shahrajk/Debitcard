import React, { Component } from 'react'
import { LogBox } from 'react-native'
import AppRouteConfig from './Src/navigation/appRoute'
import persist from './Src/redux/store/index'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { DummyData } from './Src/utility/DummyData'

import { createServer } from "miragejs"

// Check serve is already created or not
if (window.server) {
  server.shutdown()
}

// Mock API
window.server = createServer({
  routes() {
    this.get("/api/DefaultSpendOption", () => {
      return {
        DefaultSpendOption: DummyData.DefaultSpendOption,
      }
    })
  },
})

const persistStore = persist()

export default class App extends Component {
  render() {
    LogBox.ignoreAllLogs(true) //remove yellow warning box
    return (
      <Provider store={persistStore.store}>
        <PersistGate loading={null} persistor={persistStore.persistor}>
          <AppRouteConfig />
        </PersistGate>
      </Provider>
    )
  }
}
