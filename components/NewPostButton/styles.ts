import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  button: {
    positon: "absolute",
    borderRadius: 60,
    width: 60,
    height: 60,
    bottom: 70,
    left: 170,
    backgroundColor: "#6a0dad",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.8,
  },
  // shadowProp: {
  //   shadowColor: "#000",
  //   shadowOffset: {
  //     width: 0,
  //     height: 12,
  //   },
  //   shadowOpacity: 0.58,
  //   shadowRadius: 16.0,

  //   elevation: 24,
  // },
});

export default styles;
