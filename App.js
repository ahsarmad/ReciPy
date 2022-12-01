import { LogBox } from "react-native";
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
import React, { useState, useEffect, useMemo, useReducer, useRef } from "react";
import { AuthProvider } from "./Context/AuthContext";
import AppNav from "./navigation/AppNav";
import model from "./state/model";
import * as Font from "expo-font";
import { StoreProvider, createStore } from "easy-peasy";

const store = createStore(model);

let importedFonts = {};
export function App() {
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
