import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons, AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import styles from "./styles";

const NewPostButton = () => {
  const onPress = () => {
    alert("New Post");
  };

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <AntDesign name="pluscircle" size={60} color="#6a0dad" />
    </TouchableOpacity>
  );
};

export default NewPostButton;
