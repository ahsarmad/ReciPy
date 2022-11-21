import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import styles from "../styles/favorite-styles";
import { useStoreState, useStoreActions } from "easy-peasy";

export default function Favorites({ navigation }) {
  /* -------------------- Redux State Variables -------------------- */

  /* -------------------- Redux State Colors -------------------- */
  const headerColor = useStoreState((state) => state.headerColor);
  const pageColor = useStoreState((state) => state.pageColor);
  const bannerColor = useStoreState((state) => state.bannerColor);

  /* -------------------- Render Method -------------------- */
  return (
    <View style={[styles.wholeScreen, { backgroundColor: pageColor }]}>
      <View style={[styles.pushDown, { backgroundColor: headerColor }]}></View>

      <View style={[styles.header, { backgroundColor: headerColor }]}>
        <Text style={[styles.headerText]}>Favorites</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={[styles.backIconTouch]}
        >
          <Image
            source={require("../assets/icons/go-back.png")}
            style={[styles.backIcon, { tintColor: bannerColor }]}
          />
          {/* <Ionicons
              name="ios-home"
              color={"white"}
              size={35}
              style={styles.backIcon}
            /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
}
