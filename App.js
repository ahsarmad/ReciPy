import React, { useState, useEffect, useMemo, useReducer, useRef } from "react";
import { View, Text, Button, StatusBar, ToastAndroid } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Lottie from "lottie-react-native";

import * as Font from "expo-font";
import { AppLoading } from "expo";
/**
 * Import all the necessary screens/ components
 */

import { AuthContext } from "./components/context";
import MainTab from "./screens/MainTab";
import Contact from "./screens/Contact";
import Settings from "./screens/Settings";
import Favorites from "./screens/Favorites";
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from "react-native-paper";

import { DrawerContent } from "./screens/DrawerContent";

// Implementing Root Stack Structure for splash - sign in - sign up navigation

import RootStack from "./screens/RootStack";
import { ActivityIndicator } from "react-native-paper";

const Drawer = createDrawerNavigator();

const App = () => {
  const toastConfig = {
    /*
      Overwrite 'success' type,
      by modifying the existing `BaseToast` component
    */
    success: (props) => (
      <ErrorToast
        {...props}
        style={{ borderLeftColor: "#3DBE29", borderLeftWidth: 15 }}
        text1Style={{
          fontSize: 17,
        }}
        text2Style={{
          fontSize: 12,
        }}
      />
    ),
    /*
      Overwrite 'error' type,
      by modifying the existing `ErrorToast` component
    */
    error: (props) => (
      <ErrorToast
        {...props}
        style={{ borderLeftColor: "red", borderLeftWidth: 15 }}
        text1Style={{
          fontSize: 17,
        }}
        text2Style={{
          fontSize: 12,
        }}
      />
    ),
  };

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const [isLoading, setisLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const initLoginState = {
    isLoading: true,
    email: null,
    userToken: null,
  };

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: "#ffffff",
      text: "#333333",
    },
  };

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: "#333333",
      text: "#ffffff",
    },
  };

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case "RETRIEVE_TOKEN":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGIN":
        return {
          ...prevState,
          email: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGOUT":
        return {
          ...prevState,
          email: null,
          userToken: null,
          isLoading: false,
        };
      case "REGISTER":
        return {
          ...prevState,
          email: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = useReducer(loginReducer, initLoginState);

  const authContext = useMemo(
    () => ({
      signIn: async (foundUser) => {
        //! Integrate with backend system here, fetch from database
        const userToken = String(foundUser[0].userToken);
        const email = foundUser[0].email;

        try {
          await AsyncStorage.setItem("userToken", userToken);
        } catch (e) {
          console.log(e);
        }
        dispatch({ type: "LOGIN", id: email, token: userToken });
      },
      signUp: () => {
        setisLoading(false);
        setUserToken("temp");
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem("userToken");
        } catch (e) {
          console.log(e);
        }
        dispatch({ type: "LOGOUT" });

        // setisLoading(false);
        // setUserToken(null);
      },

      toggleTheme: () => {
        setIsDarkTheme((isDarkTheme) => !isDarkTheme);
      },
    }),
    []
  );

  useEffect(() => {
    setTimeout(async () => {
      // setisLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem("userToken");
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: "RETRIEVE_TOKEN", token: userToken });
    }, 4000);
  }, []);

  const cmAnimation = useRef();

  const playAnimation = () => {
    cmAnimation.current.play();
  };

  useEffect(() => {
    if (cmAnimation.current) {
      setTimeout(() => {
        cmAnimation.current?.reset();
        cmAnimation.current?.play();
      }, 0);
    }
  }, [cmAnimation.current]);
  if (loginState.isLoading) {
    return (
      <View
        style={{
          backgroundColor: "#2694f9",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Lottie
          ref={cmAnimation}
          source={require("./assets/img/pizza-lottie.json")} // source={require("./assets/img/cooking-lottie-updated.json")}
          style={{ width: 400, height: 300 }}
          loop={true}
          speed={1}
          renderMode={"SOFTWARE"}
        />
      </View>
    );
  }

  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
          {loginState.userToken !== null ? (
            <Drawer.Navigator
              drawerContent={(props) => <DrawerContent {...props} />}
            >
              <Drawer.Screen
                name="HomeDrawer"
                component={MainTab}
                options={{ headerShown: false }}
              />
              <Drawer.Screen name="Contact" component={Contact} options={{}} />
              <Drawer.Screen
                name="Settings"
                component={Settings}
                options={{}}
              />
              <Drawer.Screen
                name="Favorites"
                component={Favorites}
                options={{}}
              />
            </Drawer.Navigator>
          ) : (
            <RootStack />
          )}
          {/*  */}
          <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
};

export default App;
