import React from "react";
import { View, FlatList } from "react-native";
import posts from "../../data/posts";
import Post from "../Social-Feed";

const Feed = () => (
  <FlatList data={posts} renderItem={({ item }) => <Post post={item} />} />
);
export default Feed;
