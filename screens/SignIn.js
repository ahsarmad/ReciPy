import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  KeyboardAvoidingView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  TextInput,
  Image,
  Platform,
  Keyboard,
  Alert,
} from "react-native";
import React, { useState, useContext } from "react";
import { useFonts } from "expo-font";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import { AuthContext } from "../components/context";
import Users from "../models/users";

import {
  AntDesign,
  SimpleLineIcons,
  Feather,
  FontAwesome5,
  Entypo,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";

const SignIn = ({ navigation }) => {
  /* useState to set parameters to be checked through input */
  const [data, setData] = React.useState({
    username: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const { signIn } = React.useContext(AuthContext);

  /**
   * If email field has more than 7 characters inputted:
   * set check_textInputChange to true --> update state  -> reveal icon
   * */
  const textInputChange = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  /* use array destructuring to get existing state */

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  /* get existing state and change secureTextEntry to !secureTextEntry */

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValidUser = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  const loginHandle = (email, password) => {
    const foundUser = Users.filter((item) => {
      return email == item.username && password == item.password;
    });

    if (data.username.length == 0 || data.password.length == 0) {
      Alert.alert(
        "Wrong Input!",
        "Username or password field cannot be empty.",
        [{ text: "Okay" }]
      );
      return;
    }

    if (foundUser.length == 0) {
      Alert.alert("Invalid User!", "Username or password is incorrect.", [
        { text: "Okay" },
      ]);
      return;
    }
    signIn(foundUser);
  };

  // ----------------------------------------------------------------

  /* Using hook to load in custom font  */
  const [loaded] = useFonts({
    Quicksand: require("../assets/fonts/Quicksand-SemiBold.ttf"),
    Quicksand_Light: require("../assets/fonts/Quicksand-Light.ttf"),
  });
  if (!loaded) {
    return null;
  }

  /**
   * ! Structure
   * ! Different components grouped in terms of nested capabilities + usability
   * ! Easily format components from header and footer aspects of screen independently
   * ! Header (Including Sign In message + Vector icons allotted 1/2.7 of screen )
   * ! Footer (Including Text inputs -> Email.. Passwors fields allotted 1.7.2.7 of screen )
   * Different color schemes/ gradients can be implemented. Styles are tentative and always subject to change!
   */

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.header}>
          <Animatable.View animation="fadeInUpBig">
            <Text style={styles.text_header}> Sign In </Text>
          </Animatable.View>
          <Animatable.View style={styles.pie_container} animation="fadeInUpBig">
            <Image
              source={require("../assets/img/Pie-V2-Vector.png")}
              style={styles.pie}
              resizeMode="contain"
            />
          </Animatable.View>
          <Animatable.View
            style={styles.salad_container}
            animation="fadeInUpBig"
          >
            <Image
              source={require("../assets/img/Salad-V2-Vector.png")}
              style={styles.salad}
              resizeMode="contain"
            />
          </Animatable.View>
          <Animatable.View
            style={styles.apple_container}
            animation="fadeInUpBig"
          >
            <Image
              source={require("../assets/img/Apple-Vector.png")}
              style={styles.apple}
              resizeMode="contain"
            />
          </Animatable.View>
        </View>

        {/*------------------------------- Footer content ------------------------------- */}

        <ScrollView style={styles.footer}>
          <Animatable.View animation="fadeInUpBig">
            <Text style={[styles.text_footer, { marginBottom: 10 }]}>
              Email
            </Text>
            <View style={styles.action}>
              <AntDesign name="mail" color="black" size={20} />
              <TextInput
                placeholder="Please enter your email"
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val) => [textInputChange(val)]}
                onEndEditing={(e) => [handleValidUser(e.nativeEvent.text)]}
              />
              {data.check_textInputChange ? (
                <Animatable.View animation="bounceIn">
                  <AntDesign name="checkcircleo" color="#2694F9" size={18} />
                </Animatable.View>
              ) : null}
            </View>
            {data.isValidUser ? null : (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMessage}>
                  Email must be at least 4 characters
                </Text>
              </Animatable.View>
            )}
            <Text
              style={[styles.text_footer, { marginTop: 35, marginBottom: 10 }]}
            >
              Password
            </Text>
            <View style={styles.action}>
              <Ionicons name="lock-closed-outline" color="black" size={20} />
              <TextInput
                placeholder="Please enter your password"
                secureTextEntry={data.secureTextEntry ? true : false}
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val) => [handlePasswordChange(val)]}
              />
              <TouchableOpacity onPress={updateSecureTextEntry}>
                {data.secureTextEntry ? (
                  <Ionicons
                    name="md-eye-off-outline"
                    color="#2694F9"
                    size={20}
                  />
                ) : (
                  <Ionicons name="md-eye-outline" color="#2694F9" size={20} />
                )}
              </TouchableOpacity>
            </View>
            {data.isValidPassword ? null : (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMessage}>
                  Password must be at least 8 characters
                </Text>
              </Animatable.View>
            )}
            <Animatable.View animation="fadeInUp">
              <TouchableOpacity
                onPress={() => {
                  loginHandle(data.email, data.password);
                }}
                style={[styles.signInButton, styles.shadowProp]}
              >
                <LinearGradient
                  colors={["#2694F9", "#2694F9"]}
                  style={styles.signIn}
                >
                  <Text style={styles.textSign}>Sign In </Text>
                  <MaterialIcons name="navigate-next" color="#fff" size={20} />
                </LinearGradient>
              </TouchableOpacity>
            </Animatable.View>
            <View style={styles.registerMessageContainer}>
              <Text style={styles.registerMessage}>
                Don't have an account yet? Sign up
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                <Text style={styles.registerHereButton}> here</Text>
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2694F9",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1.8,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 160,
    paddingHorizontal: 30,
    shadowColor: "#171717",
    shadowOffset: { width: -3, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 48,
    fontFamily: "Quicksand",
    marginTop: 140,
    marginBottom: -200,
    marginRight: 170,
  },
  text_footer: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Quicksand",
    marginTop: -110,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    paddingBottom: 4,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: "black",
    fontFamily: "Quicksand",
  },
  errorMessage: {
    color: "red",
    fontFamily: "Quicksand",
    paddingTop: 10,
  },
  errorMessageCreds: {
    color: "red",
    marginTop: 5,
    marginLeft: 90,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  pie_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pie: {
    width: 210,
    height: 230,
    marginLeft: 310,
    marginBottom: 10,
    marginTop: 180,
  },
  salad_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  salad: {
    width: 45,
    height: 55,
    marginRight: 359,
    marginLeft: -0,
    marginBottom: 425,
    marginTop: 340,
  },
  apple_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  apple: {
    width: 60,
    height: 65,
    marginTop: 50,
    marginRight: 235,
  },
  title: {
    color: "#05375a",
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    color: "grey",
    marginTop: 5,
  },

  button: {
    alignItems: "flex-end",
    marginTop: 30,
  },
  signIn: {
    width: 330,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
    paddingLeft: 10,
  },
  signInButton: {
    alignItems: "center",
    marginBottom: 30,
    marginTop: 60,
    justifyContent: "center",
  },
  registerMessageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  registerMessage: {
    fontFamily: "Quicksand_Light",
  },

  registerHereButton: {
    fontFamily: "Quicksand",
    fontWeight: "bold",
    color: "#5026F9",
  },
  textSign: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "Quicksand",
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -3, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});
