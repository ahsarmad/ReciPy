import React, { useState } from "react";
import { Text, View, Switch, Pressable } from "react-native";
import styles from "../styles/settings-styles";
import { useStoreState, useStoreActions } from "easy-peasy";

export default function Settings() {
  /* -------------------- Redux State Variables -------------------- */
  const lightEnabled = useStoreState((state) => state.lightEnabled);
  const darkEnabled = useStoreState((state) => state.darkEnabled);
  const halloweenEnabled = useStoreState((state) => state.halloweenEnabled);

  const setLightEnabled = useStoreActions((actions) => actions.setLightEnabled);
  const setDarkEnabled = useStoreActions((actions) => actions.setDarkEnabled);
  const setHalloweenEnabled = useStoreActions(
    (actions) => actions.setHalloweenEnabled
  );

  /* -------------------- Redux State Colors -------------------- */
  const headerColor = useStoreState((state) => state.headerColor);
  const pageColor = useStoreState((state) => state.pageColor);
  const bannerColor = useStoreState((state) => state.bannerColor);

  /* -------------------- Handler Functions -------------------- */
  const lightSwitch = () => {
    setLightEnabled((lightEnabled) => !lightEnabled);
  };
  const darkSwitch = () => {
    setDarkEnabled((darkEnabled) => !darkEnabled);
  };
  const halloweenSwitch = () => {
    setHalloweenEnabled((halloweenEnabled) => !halloweenEnabled);
  };

  /* -------------------- Render Method -------------------- */
  return (
    <View style={[styles.wholeScreen, { backgroundColor: pageColor }]}>
      <View style={[styles.pushDown, { backgroundColor: headerColor }]}></View>

      <View style={[styles.header, { backgroundColor: headerColor }]}>
        <Text style={[styles.headerText]}>Settings</Text>
      </View>

      <View
        style={[
          styles.outline,
          styles.smallMargins,
          styles.settingOption,
          styles.centerItems,
        ]}
      >
        <Text style={[styles.font1, styles.fontLarge]}>Display Settings</Text>
      </View>

      <View style={[styles.settingOption, styles.width70, styles.inline]}>
        <View style={[styles.width70, styles.textCenter]}>
          <Text style={[styles.font1, styles.fontLarge]}>Light Mode</Text>
        </View>
        <View style={[styles.width30, styles.centerItems]}>
          <Switch
            trackColor={{ false: "#CCCCCC", true: "#CCCCCC" }}
            thumbColor={lightEnabled ? "#2196F3" : "gray"}
            onValueChange={lightSwitch}
            value={lightEnabled}
            style={[styles.switch]}
          />
        </View>
      </View>

      <View style={[styles.settingOption, styles.width70, styles.inline]}>
        <View style={[styles.width70, styles.textCenter]}>
          <Text style={[styles.font1, styles.fontLarge]}>Dark Mode</Text>
        </View>
        <View style={[styles.width30, styles.centerItems]}>
          <Switch
            trackColor={{ false: "#CCCCCC", true: "#CCCCCC" }}
            thumbColor={darkEnabled ? "#2196F3" : "gray"}
            onValueChange={darkSwitch}
            value={darkEnabled}
            style={[styles.switch]}
          />
        </View>
      </View>

      <View style={[styles.settingOption, styles.width70, styles.inline]}>
        <View style={[styles.width70, styles.textCenter]}>
          <Text style={[styles.font1, styles.fontLarge]}>Halloween Mode</Text>
        </View>
        <View style={[styles.width30, styles.centerItems]}>
          <Switch
            trackColor={{ false: "#CCCCCC", true: "#CCCCCC" }}
            thumbColor={halloweenEnabled ? "#09FF00" : "gray"}
            onValueChange={halloweenSwitch}
            value={halloweenEnabled}
            style={[styles.switch]}
          />
        </View>
      </View>
    </View>
  );
}

// import { StyleSheet, Text, View, Button } from "react-native";
// import React from "react";

// const Settings = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Button
//         title="Click me!"
//         onPress={() => alert("Settings page pending!")}
//       />
//       <Button title="Go to home" onPress={() => navigation.navigate("Home")} />
//     </View>
//   );
// };

// export default Settings;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });
