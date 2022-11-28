// import {
//   Text,
//   StyleSheet,
//   View,
//   TouchableOpacity,
//   Alert,
//   SafeAreaView,
//   Image,
//   TextInput,
//   ScrollView,
// } from "react-native";
// import Toast from "react-native-toast-message";

// import React, { useCallback, useState } from "react";
// import { Ionicons } from "@expo/vector-icons";
// import ProfilePic from "../components/ProfilePic";
// import styles from "../styles/new-post-styles";
// import { useFocusEffect } from "@react-navigation/native";
// import axios from "axios";
// import baseURL from "../assets/common/baseUrl";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const NewPost = (props) => {
//   {
//     const [name, setName] = useState("");
//     const [imageUrl, setImageUrl] = useState("");

//     // const makeNewPost = () => {
//     //   let content = {
//     //     name: name,
//     //     imageUrl: imageUrl,
//     //   };

//     axios
//       .post("https://recipy-test-server.herokuapp.com/api/v1/posts", {
//         name: name,
//         imageUrl: imageUrl,
//       })
//       .then((res) => {
//         if (res.status == 200) {
//           Toast.show({
//             topOffset: 60,
//             type: "success",
//             text1: "Registration Successful",
//             text2: "Please sign in to your account",
//           });
//           setTimeout(() => {
//             props.navigation.goBack();
//           }, 500);
//         }
//       })
//       .catch((error) => {
//         Toast.show({
//           topOffset: 60,
//           type: "error",
//           text1: "Something went wrong",
//           text2: "Please try again",
//         });
//       });

//     const onNewPost = async () => {
//       try {
//         const resp = await axios.post(
//           "https://recipy-test-server.herokuapp.com/api/v1/posts",
//           { name: name, imageUrl: imageUrl }
//         );
//         console.log(resp.data);
//       } catch (error) {
//         console.log(error.response);
//       }
//     };

//     const onBack = () => {
//       props.navigation.goBack();
//     };

//     return (
//       <ScrollView>
//         <SafeAreaView style={styles.container}>
//           <View style={styles.headerContainer}>
//             <TouchableOpacity onPress={onBack}>
//               <Ionicons name="close" size={32} color="#3E92CC" />
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.button} onPress={() => onNewPost()}>
//               <Text style={styles.buttonText}> POST! </Text>
//             </TouchableOpacity>
//           </View>

//           <View style={styles.entirePostContainer}>
//             <View>
//               <View style={styles.profilePic}>
//                 <ProfilePic
//                   source={require("../assets/img/chef-profile.png")}
//                 />
//               </View>
//             </View>

//             <View style={styles.inputsContainer}>
//               <TextInput
//                 value={name}
//                 onChangeText={(value) => [setName(value)]}
//                 multiline={true}
//                 numberOfLines={3}
//                 style={styles.textInput}
//                 placeholder={"Create a new post!"}
//               />
//               <TextInput
//                 style={styles.imageInput}
//                 value={imageUrl}
//                 onChangeText={(value) => [setImageUrl(value)]}
//                 placeholder={"Image url: (optional)"}
//               />
//             </View>
//           </View>
//         </SafeAreaView>
//       </ScrollView>
//     );
//   }
// };

// export default NewPost;

import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import Feed from "../components/Feed";
import NewPostButton from "../components/NewPostButton";
import { Ionicons } from "@expo/vector-icons";
import ProfilePic from "../components/ProfilePic";
import styles from "../styles/new-post-styles";

const NewPost = ({ navigation }) => {
  const onPostButton = () => {
    Alert.alert("Cancel Pressed");
  };
  const onBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={onBack}>
            <Ionicons name="close" size={32} color="#3E92CC" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onPostButton}>
            <Text style={styles.buttonText}> POST! </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.entirePostContainer}>
          <View>
            <View style={styles.profilePic}>
              <ProfilePic source={require("../assets/img/chef-profile.png")} />
            </View>
          </View>

          <View style={styles.inputsContainer}>
            <TextInput
              multiline={true}
              numberOfLines={3}
              style={styles.textInput}
              placeholder={"Create a new post!"}
            />
            <TextInput
              style={styles.imageInput}
              placeholder={"Image url: (optional)"}
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default NewPost;
