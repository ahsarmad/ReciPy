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
import React, { useCallback, useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Amplify, Auth, API, graphqlOperation } from "aws-amplify";
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";
// import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

import ProfilePic from "../components/ProfilePic";
import styles from "../styles/new-post-styles";
import baseURL from "../assets/common/baseUrl";
import * as Animatable from "react-native-animatable";
import { createPost } from "../src/graphql/mutations";

const NewPost = (props) => {
  // const getPermissionsAsync = async () => {
  //   if (Platform.OS !== "web") {
  //     const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  //     if (status !== "granted") {
  //       alert("Sorry, we need camera roll permissions to make this work!");
  //     }
  //   }
  // };

  // useEffect(() => {
  //   getPermissionsAsync();
  // }, []);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setImageUrl(result.uri);
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };

  const [post, setPost] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const onPostContent = async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });

      const newPost = {
        content: post,
        image: imageUrl,
        userID: currentUser.attributes.sub,
      };
      await API.graphql(graphqlOperation(createPost, { input: newPost }));
      Toast.show({
        topOffset: 60,
        type: "success",
        text1: "Posted Successfully!",
      });
      setTimeout(() => {
        props.navigation.goBack();
      }, 300);
    } catch (e) {
      Toast.show({
        topOffset: 60,
        type: "error",
        text1: "Something went wrong",
        text2: "Please try again",
      });
      console.log(e);
    }
  };

  {
    /*--------------------------------------- ^making api callˇ --------------------------------------------- */
  }

  // const makeNewPost = () => {
  //   let posts = {
  //     name: name,
  //     imageUrl: imageUrl,
  //   };

  // axios
  //   .post(`${baseURL}posts`, posts)
  //   .then((res) => {
  //     if (res.status == 200) {
  //       Toast.show({
  //         topOffset: 60,
  //         type: "success",
  //         text1: "Posted Successfully!",
  //       });
  //       setTimeout(() => {
  //         props.navigation.goBack();
  //       }, 300);
  //     }
  //   })
  //   .catch((error) => {
  //     Toast.show({
  //       topOffset: 60,
  //       type: "error",
  //       text1: "Something went wrong",
  //       text2: "Please try again",
  //     });
  //     console.log(error.response);
  //   });
  // };

  // const onPostButton = () => {
  //   onPostContent();
  //   console.log(`Post Content: ${name}, Image Content: ${imageUrl}`);
  // };
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
                onPostContent(),
                console.log(`Posting the post: ${post} Image: ${imageUrl}`),
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
                value={post}
                onChangeText={(value) => setPost(value)}
                // name={"name"}
                // id={"name"}
                // onChangeText={(text) => [setName(text)]}
                multiline={true}
                style={[styles.PostContentInput, styles.action]}
                placeholder={"Create a new post!"}
              />

              <TouchableOpacity onPress={pickImage}>
                <Text style={styles.imageSelectInput}>Select an image!</Text>
              </TouchableOpacity>
              {/* <TextInput
                value={imageUrl}
                onChangeText={(imageUrl) => setImageUrl(imageUrl)}
                // name={"imageUrl"}
                // id={"imageUrl"}
                // onChangeText={(text) => [setImageUrl(text)]}
                multiline={true}
                style={[styles.imageUrlContent, styles.action]}
                placeholder={"Image url: (optional)"}
              /> */}

              <Image source={{ uri: imageUrl }} style={styles.imagePreview} />
            </View>
          </View>
        </SafeAreaView>
      </Animatable.View>
    </ScrollView>
    // </TouchableWithoutFeedback>
  );
};

export default NewPost;
