import { LogBox } from "react-native";
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

import React, { useState, useEffect, useMemo, useReducer, useRef } from "react";
import { Amplify } from "aws-amplify";
import { StoreProvider, createStore } from "easy-peasy";
import * as Font from "expo-font";

import { AuthProvider } from "./Context/AuthContext";
import AppNav from "./navigation/AppNav";
import model from "./state/model";
import awsconfig from "./src/aws-exports";

Amplify.configure(awsconfig);

const store = createStore(model);

function App() {
  /* -------------------- Async Font Loading -------------------- */
  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        "GrandHotel-Regular": require("./assets/fonts/GrandHotel-Regular.ttf"),
        "Festive-Regular": require("./assets/fonts/Festive-Regular.ttf"),
        "AmaticSC-Regular": require("./assets/fonts/AmaticSC-Regular.ttf"),
        "AmaticSC-Bold": require("./assets/fonts/AmaticSC-Bold.ttf"),
        "Courgette-Regular": require("./assets/fonts/Courgette-Regular.ttf"),
        "Quicksand-SemiBold": require("./assets/fonts/Quicksand-SemiBold.ttf"),
      });
    };
    loadFonts();
  }, []);

  /* -------------------- Return Method -------------------- */

  return (
    <AuthProvider>
      <StoreProvider store={store}>
        <AppNav />
      </StoreProvider>
    </AuthProvider>
  );
}

export default App;
