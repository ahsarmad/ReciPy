import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import React from "react";
import Feed from "../components/Feed";
import NewPostButton from "../components/NewPostButton";
import NewPost from "./NewPost";

const Explore = (props) => {
  return (
    <View style={styles.container}>
      <Feed />
      <NewPostButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Explore;
