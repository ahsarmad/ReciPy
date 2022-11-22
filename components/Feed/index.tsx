import React from "react";
import { View, FlatList } from "react-native";
import posts from "../../data/posts";
import Post from "../Social-Feed";

const Feed = () => (
  <View style={{ width: "100%" }}>
    <FlatList
      data={posts}
      renderItem={({ item }) => <Post post={item} />}
      keyExtractor={(item) => item.id}
    />
  </View>
);
export default Feed;
