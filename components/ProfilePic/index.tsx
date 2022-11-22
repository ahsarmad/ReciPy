import React from "react";
import { Image } from "react-native";

export type ProfilePicProps = {
  image?: string;
  size?: number;
  color?: string;
};

// Image taken from free png icon site: https://www.pngrepo.com/svg/275204/chef
const ProfilePic = ({ image, size = 65, color }: ProfilePicProps) => (
  <Image
    source={require("../../assets/img/chef-profile.png")}
    style={{
      width: size,
      height: size,
      borderRadius: size,
      backgroundColor: color,
    }}
  />
);

export default ProfilePic;
