import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  postHeaderContainer: {
    flexDirection: "row",
  },
  name: {
    marginRight: 5,
    fontWeight: "bold",
  },
  username: {
    marginRight: 5,
    color: "grey",
  },
  smallDot: {
    color: "grey",
    fontWeight: "300",
  },
  createdAt: {
    marginRight: 2,
    color: "grey",
  },
  content: {
    marginTop: 5,
    lineHeight: 18,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 15,
    overflow: "hidden",
    marginVertical: 10,
  },
});

export default styles;
