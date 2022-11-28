import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import Feed from "../components/Feed";
import NewPostButton from "../components/NewPostButton";
import { Ionicons } from "@expo/vector-icons";
import ProfilePic from "../components/ProfilePic";

const NewPost = ({ navigation }) => {
  const onPostButton = () => {
    Alert.alert("Cancel Pressed");
  };
  const onBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={onBack}>
          <Ionicons name="close" size={32} color="#3E92CC" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onPostButton}>
          <Text style={styles.buttonText}> POST! </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.newPostContainer}>
        <View style={styles.profilePic}>
          <ProfilePic source={require("../assets/img/chef-profile.png")} />
        </View>
        <View style={styles.inputsContainer}>
          <TextInput
            numberOfLines={3}
            style={styles.textInput}
            placeholder={"Make a new post!"}
          />
          <TextInput
            style={styles.imageInput}
            placeholder={"Image url: (optional)"}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: "white",
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6a0dad",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 7,
  },
  buttonText: {
    color: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontFamily: "Quicksand-SemiBold",
    fontSize: 17,
  },
  profilePic: {
    backgroundColor: "#b1f2ff",
    borderRadius: 60,
    width: 60,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 7,
  },
  inputsContainer: {
    marginLeft: 10,
  },
  textInput: {},

  imageInput: {},
  newPostContainer: {
    flexDirection: "row",
    padding: 15,
  },
});

export default NewPost;
