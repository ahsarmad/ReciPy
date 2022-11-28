import React, { useContext } from "react";
import { View, Text, Image } from "react-native";
import { PostType } from "../../../types";
import moment from "moment";
import { AuthContext } from "../../../Context/AuthContext";

import styles from "./styles";

export type MainContainerProps = {
  post: PostType;
};

const MainContainer = ({ post }: MainContainerProps) => (
  // const { userInfo } = useContext(AuthContext);
  <View style={styles.container}>
    <View style={styles.postHeaderContainer}>
      <Text style={styles.name}>{post.user.name}</Text>
      <Text style={styles.username}>@{post.user.username}</Text>
      {/* <Text>{post.createdAt}</Text> */}
      <Text style={styles.smallDot}> • </Text>
      <Text style={styles.createdAt}> {moment(post.createdAt).fromNow()} </Text>
    </View>
    <View>
      <Text style={styles.content}>{post.content}</Text>
      {!!post.image && (
        <Image style={styles.image} source={{ uri: post.image }} />
      )}
    </View>
  </View>
);

export default MainContainer;
