import React, { useState, useEffect, useMemo, useReducer, useRef } from "react";
import { AuthProvider } from "./Context/AuthContext";
import AppNav from "./screens/AppNav";
import model from "./state/model";
import * as Font from 'expo-font';
import { StoreProvider, createStore } from "easy-peasy";

const store = createStore(model);



let importedFonts = {
  'GrandHotel-Regular': require('./assets/fonts/GrandHotel-Regular.ttf'),
  'Festive-Regular': require('./assets/fonts/Festive-Regular.ttf'),
  'AmaticSC-Regular': require('./assets/fonts/AmaticSC-Regular.ttf'),
  'AmaticSC-Bold': require('./assets/fonts/AmaticSC-Bold.ttf'),
  'Courgette-Regular': require('./assets/fonts/Courgette-Regular.ttf'),
};
export default class App extends React.Component {
  /* -------------------- Async Font Loading -------------------- */
  state = { fontsLoaded: false };

  async _loadFontsAsync() {
    await Font.loadAsync(importedFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  /* -------------------- Render Method -------------------- */
  render() {
    if (!this.state.fontsLoaded) {
      return null;
    }
    return (
      <AuthProvider>
        <StoreProvider store={store}>
          <AppNav />
        </StoreProvider>
      </AuthProvider>

    );
  }
}
