import { LogBox } from "react-native";
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

import React, { useState, useEffect, useMemo, useReducer, useRef } from "react";
import { Amplify, Auth, API, graphqlOperation } from "aws-amplify";
import { StoreProvider, createStore } from "easy-peasy";
import * as Font from "expo-font";
import { withAuthenticator } from "aws-amplify-react-native";

import { AuthProvider } from "./Context/AuthContext";
import AppNav from "./navigation/AppNav";
import model from "./state/model";
import awsconfig from "./src/aws-exports";
import { getUser } from "./src/graphql/queries";
import { createUser } from "./src/graphql/mutations";
import { CreateUserInput } from "./src/API";

Amplify.configure(awsconfig);

const store = createStore(model);

function App() {
  const getRandImg = () => {
    return "https://images.unsplash.com/photo-1530878955558-a6c31b9c97db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmljZXxlbnwwfHwwfHw%3D&w=1000&q=80";
  };
  const saveUser = async (user) => {
    console.log(user);
    await API.graphql(graphqlOperation(createUser, { input: user }));
  };

  useEffect(() => {
    const updateUser = async () => {
      // Get the current user thats authenticated
      const userInfo = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });

      // Check if the user is already in the db
      if (userInfo) {
        const userData = await API.graphql(
          graphqlOperation(getUser, { id: userInfo.attributes.sub })
        );
        console.log(userData);
        if (!userData.data.getUser) {
          const user = {
            id: userInfo.attributes.sub,
            name: userInfo.attributes.name,
            email: userInfo.attributes.email,
            username: userInfo.username,
            image: getRandImg(),
          };
          await saveUser(user);
        } else {
          console.log("User already in db");
        }
      }
      // If they dont, add them
    };
    updateUser();
  }, []);

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
        "Quicksand-Regular": require("./assets/fonts/Quicksand-Regular.ttf"),
        "Nunito-Medium": require("./assets/fonts/Nunito-Medium.ttf"),
        "Nunito-SemiBold": require("./assets/fonts/Nunito-SemiBold.ttf"),
        "Nunito-Regular": require("./assets/fonts/Nunito-Regular.ttf"),
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

export default withAuthenticator(App);
