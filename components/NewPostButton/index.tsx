import React from "react";
import { TouchableOpacity } from "react-native";
import {
  Ionicons,
  AntDesign,
  SimpleLineIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import styles from "./styles";

const NewPostButton = () => {
  const onPress = () => {
    alert("New Post");
  };

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <FontAwesome5 name="pen" size={22} color="#fff" />
    </TouchableOpacity>
  );
};

export default NewPostButton;
