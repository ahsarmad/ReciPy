import {
  Text,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  Alert,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useCallback, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import ProfilePic from "../components/ProfilePic";
import styles from "../styles/new-post-styles";
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import baseURL from "../assets/common/baseUrl";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";
import * as Animatable from "react-native-animatable";

const NewPost = (props) => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const makeNewPost = () => {
    let posts = {
      name: name,
      imageUrl: imageUrl,
    };

    axios
      .post(`${baseURL}posts`, posts)
      .then((res) => {
        if (res.status == 200) {
          Toast.show({
            topOffset: 60,
            type: "success",
            text1: "Posted Successfully!",
          });
          setTimeout(() => {
            props.navigation.goBack();
          }, 300);
        }
      })
      .catch((error) => {
        Toast.show({
          topOffset: 60,
          type: "error",
          text1: "Something went wrong",
          text2: "Please try again",
        });
        console.log(error.response);
      });
  };

  const onPostButton = () => {
    makeNewPost();
    console.log(`Posting the post: ${name} Image: ${imageUrl}`);
  };
  const onBack = () => {
    props.navigation.goBack();
  };

  return (
    <ScrollView>
      <Animatable.View animation="fadeInRight">
        <SafeAreaView style={styles.container}>
          <View style={styles.headerContainer}>
            <TouchableOpacity activeOpacity={0.4} onPress={onBack}>
              <Ionicons name="close" size={32} color="#3E92CC" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.4}
              onPress={() => [
                makeNewPost(),
                console.log(`Posting the post: ${name} Image: ${imageUrl}`),
              ]}
            >
              <Text style={styles.buttonText}> POST! </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.entirePostContainer}>
            <View>
              <View style={styles.profilePic}>
                <ProfilePic
                  source={require("../assets/img/chef-profile.png")}
                />
              </View>
            </View>

            <View style={styles.inputsContainer}>
              <TextInput
                value={name}
                onChangeText={(value) => setName(value)}
                // name={"name"}
                // id={"name"}
                // onChangeText={(text) => [setName(text)]}
                multiline={true}
                style={[styles.PostContentInput, styles.action]}
                placeholder={"Create a new post!"}
              />
              <TextInput
                value={imageUrl}
                onChangeText={(imageUrl) => setImageUrl(imageUrl)}
                // name={"imageUrl"}
                // id={"imageUrl"}
                // onChangeText={(text) => [setImageUrl(text)]}
                multiline={true}
                style={[styles.imageUrlContent, styles.action]}
                placeholder={"Image url: (optional)"}
              />
            </View>
          </View>
        </SafeAreaView>
      </Animatable.View>
    </ScrollView>
    // </TouchableWithoutFeedback>
  );
};

export default NewPost;
