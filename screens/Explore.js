import { Text, StyleSheet, View, Button } from "react-native";
import React from "react";
import Feed from "../components/Feed";
import posts from "../data/posts";

const Explore = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Feed />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Explore;
