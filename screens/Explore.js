import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import React from "react";
import Feed from "../components/Feed";
import NewPostButton from "../components/NewPostButton";
import NewPost from "./NewPost";
import * as Animatable from "react-native-animatable";

const Explore = (props) => {
  return (
    <Animatable.View style={styles.container} animation="fadeInUpBig">
      <Feed />
      {/* <NewPostButton /> */}
    </Animatable.View>
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
