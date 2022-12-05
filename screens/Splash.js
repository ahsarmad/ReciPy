import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import React, { useState, useContext } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import * as Animatable from "react-native-animatable";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { AuthContext } from "../Context/AuthContext";
import * as Font from "expo-font";

const Splash = ({ navigation }) => {
  // useFont hook to extract and use custom fonts

  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    /**
     * ! Structure:  Different components grouped in terms of nested capabilities + usability
     * ! Seperated text components for welcomeMessage -> Welcome to : Recipy, thus holding them in a greater hierarchical status
     * ! Easily adjust and format images, since we can move them freely without disturbing
     * ! message components
     * Different color schemes/ gradients can be implemented. Styles are tentative and always subject to change!
     */

    <View style={styles.container}>
      <View style={styles.welcomeMessage}>
        <View style={styles.header}>
          <View style={styles.pie_container}>
            {/*       using animatable styles in order to create fading and bouncing animations         */}
            <Animatable.Image
              animation="fadeInUpBig"
              /**
               * Pie vector image from Figma plugin
               * Author: GameIcons
               * License:CC BY 3.0
               */
              source={require("../assets/img/Pie-V2-Vector.png")}
              style={styles.pie}
              resizeMode="contain"
            />
          </View>
          <View style={styles.salad_container}>
            <Animatable.Image
              animation="fadeInUpBig"
              /**
               * Salad bowl vector image from Figma plugin
               * Author: Microsoft Corporation
               * License: MIT
               */
              source={require("../assets/img/Salad-V2-Vector.png")}
              style={styles.salad}
              resizeMode="contain"
            />
          </View>
          <View style={styles.apple_container}>
            <Animatable.Image
              animation="fadeInUpBig"
              /**
               * Apple vector image from Figma plugin
               * Author: Microsoft Corporation
               * License: MIT
               */
              source={require("../assets/img/Apple-Vector.png")}
              style={styles.apple}
              resizeMode="contain"
            />
          </View>
        </View>
        <Animatable.View animation="fadeInUpBig">
          <Text style={styles.title}>Welcome to</Text>
          <Text style={styles.title2}> Recipy!</Text>
          <Text style={styles.text}>The meal generator that cares</Text>
        </Animatable.View>
      </View>
      <Animatable.View animation="fadeInUpBig">
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => login()}
          style={[styles.signInButton, styles.shadowProp]} // here we are using a shadow prop to create an underlying shadow effect on the buttons
        >
          <LinearGradient colors={["#ffffff", "#ffffff"]} style={styles.signIn}>
            <Text style={styles.textSign}>Let's Go</Text>
            <MaterialIcons name="navigate-next" color="#2694F9" size={20} />
          </LinearGradient>
        </TouchableOpacity>
      </Animatable.View>
      {/* <Animatable.View animation="fadeInUpBig">
        <TouchableOpacity
          onPress={() => navigation.navigate("SignUp")}
          style={[styles.signUpButton, styles.shadowProp]}
        >
          <LinearGradient colors={["#ffffff", "#ffffff"]} style={styles.signIn}>
            <Text style={styles.textSign}>Sign Up </Text>
            <MaterialIcons name="navigate-next" color="#2694F9" size={20} />
          </LinearGradient>
        </TouchableOpacity>
      </Animatable.View> */}
    </View>
  );
};

export default Splash;

const { height } = Dimensions.get("window").height;
const { width } = Dimensions.get("window").width;
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2694F9",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 25,
  },

  welcomeMessage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 350,
  },
  footer: {
    flex: 1.7,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
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
    marginTop: 120,
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
    marginBottom: 525,
    marginTop: 340,
  },
  apple_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  apple: {
    width: 70,
    height: 65,
    marginBottom: 809,
    marginTop: 790,
    marginRight: 235,
  },
  title: {
    color: "#fff",
    fontSize: 60,
    fontWeight: "bold",
    fontFamily: "Quicksand-SemiBold",
  },
  title2: {
    color: "#fff",
    fontSize: 60,
    fontWeight: "bold",
    fontFamily: "Quicksand-SemiBold",
    marginLeft: 50,
  },
  text: {
    color: "#fff",
    marginBottom: -90,
    paddingBottom: 20,
    marginLeft: 6,
    marginTop: 55,
    fontWeight: "bold",
    fontSize: 22,
    fontFamily: "Quicksand-SemiBold",
  },

  button: {
    alignItems: "flex-end",
    marginTop: 30,
  },
  signInButton: {
    alignItems: "center",
    marginTop: -160,
  },
  signUpButton: {
    alignItems: "center",
    marginBottom: 60,
    marginTop: -140,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -3, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  signIn: {
    width: 330,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textSign: {
    color: "#2694F9",
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "Quicksand-SemiBold",
  },
});
