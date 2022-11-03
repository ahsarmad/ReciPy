import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  TextInput,
  ScrollView,
  Keyboard,
  Platform,
  Image,
} from "react-native";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import Toast from "react-native-toast-message";
import axios from "axios";
import baseURL from "../assets/common/baseUrl";

import {
  AntDesign,
  SimpleLineIcons,
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const register = () => {
    let user = {
      name: name,
      email: email,
      password: password,
      isAdmin: false,
    };

    axios
      .post(`${baseURL}users/register`, user)
      .then((res) => {
        if (res.status == 200) {
          Toast.show({
            topOffset: 60,
            type: "success",
            text1: "Registration Successful",
            text2: "Please sign in to your account",
          });
          setTimeout(() => {
            props.navigation.navigate("SignIn");
          }, 500);
        }
      })
      .catch((error) => {
        Toast.show({
          topOffset: 60,
          type: "error",
          text1: "Something went wrong",
          text2: "Please try again",
        });
      });
  };

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    check_emailInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const emailInputChange = (text) => {
    if (text.length > 7) {
      setData({
        ...data,
        email: text,
        check_emailInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: text,
        check_emailInputChange: false,
      });
    }
  };

  const nameInputChange = (text) => {
    if (text.length > 0) {
      setData({
        ...data,
        name: text,
        check_nameInputChange: true,
      });
    } else {
      setData({
        ...data,
        name: text,
        check_nameInputChange: false,
      });
    }
  };

  const handlePasswordChange = (text) => {
    setData({
      ...data,
      password: text,
    });
  };

  const handleConfirmPasswordChange = (text) => {
    setData({
      ...data,
      confirm_password: text,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };

  const [loaded] = useFonts({
    Quicksand: require("../assets/fonts/Quicksand-SemiBold.ttf"),
    Quicksand_Light: require("../assets/fonts/Quicksand-Light.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.header}>
          <Animatable.View animation="fadeInUpBig">
            <Text style={styles.text_header}> Sign Up </Text>
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

        <ScrollView style={styles.footer}>
          <Animatable.View animation="fadeInUpBig">
            <Text style={[styles.text_footer, { marginBottom: 10 }]}>Name</Text>
            <View style={styles.action}>
              <AntDesign name="user" color="black" size={20} />
              <TextInput
                placeholder="Please enter your name"
                style={styles.textInput}
                name={"name"}
                id={"name"}
                onChangeText={(text) => [setName(text)]}
                autoCorrect={false}
              />
              {data.check_nameInputChange ? (
                <Animatable.View animation="bounceIn">
                  <AntDesign name="checkcircleo" color="#2694F9" size={18} />
                </Animatable.View>
              ) : null}
            </View>
            <Text
              style={[styles.text_footer, { marginTop: 35, marginBottom: 10 }]}
            >
              Email
            </Text>
            <View style={styles.action}>
              <AntDesign name="mail" color="black" size={20} />
              <TextInput
                placeholder="Please enter your email"
                style={styles.textInput}
                autoCapitalize="none"
                name={"email"}
                id={"email"}
                onChangeText={(text) => [
                  emailInputChange(text),
                  setEmail(text),
                ]}
              />
              {data.check_emailInputChange ? (
                <Animatable.View animation="bounceIn">
                  <AntDesign name="checkcircleo" color="#2694F9" size={18} />
                </Animatable.View>
              ) : null}
            </View>
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
                name={"password"}
                id={"password"}
                onChangeText={(text) => [
                  handlePasswordChange(text),
                  setPassword(text),
                ]}
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

            {/* <Text
              style={[styles.text_footer, { marginTop: 35, marginBottom: 10 }]}
            >
              Confirm Password
            </Text>

            <View style={styles.action}>
              <Ionicons name="lock-closed-outline" color="black" size={20} />
              <TextInput
                placeholder="Please confirm your password"
                secureTextEntry={data.confirm_secureTextEntry ? true : false}
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(text) => handleConfirmPasswordChange(text)}
              />
              <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
                {data.confirm_secureTextEntry ? (
                  <Ionicons
                    name="md-eye-off-outline"
                    color="#2694F9"
                    size={20}
                  />
                ) : (
                  <Ionicons name="md-eye-outline" color="#2694F9" size={20} />
                )}
              </TouchableOpacity>
            </View> */}

            <Animatable.View animation="fadeInUp">
              <TouchableOpacity
                onPress={() => register()}
                style={[styles.signUpButton, styles.shadowProp]}
              >
                <LinearGradient
                  colors={["#2694F9", "#2694F9"]}
                  style={styles.signUp}
                >
                  <Text style={styles.textSign}>Sign Up </Text>
                  <MaterialIcons name="navigate-next" color="#fff" size={20} />
                </LinearGradient>
              </TouchableOpacity>
            </Animatable.View>
            <View style={styles.signInMessageContainer}>
              <Text style={styles.signInMessage}>
                Already have an account? Sign in
              </Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("SignIn")}
              >
                <Text style={styles.signInHereButton}> here</Text>
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default SignUp;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

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
    marginTop: -120,
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
  signUp: {
    width: 330,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
    paddingLeft: 10,
  },
  signUpButton: {
    alignItems: "center",
    marginBottom: 30,
    marginTop: 30,
    justifyContent: "center",
  },
  signInMessageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  signInMessage: {
    fontFamily: "Quicksand_Light",
  },

  signInHereButton: {
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
