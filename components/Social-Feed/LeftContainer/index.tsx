import React from "react";
import { View } from "react-native";
import { UserType } from "../../../types";
import ProfilePic from "../../ProfilePic";

export type LeftContainerProps = {
  user: UserType;
};

const LeftContainer = ({ user }: LeftContainerProps) => (
  <View>
    <ProfilePic image={user.image} color={"#FE7979"} />
  </View>
);

// #FE7979

export default LeftContainer;
