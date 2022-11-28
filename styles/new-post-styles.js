import React from "react";

import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: "white",
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6a0dad",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 7,
  },
  buttonText: {
    color: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontFamily: "Quicksand-SemiBold",
    fontSize: 17,
  },
  profilePic: {
    backgroundColor: "#b1f2ff",
    borderRadius: 60,
    width: 60,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 7,
  },
  inputsContainer: {
    marginLeft: 10,
  },
  textInput: {
    height: 100,
    maxHeight: 300,
    fontSize: 18,
    fontFamily: "Quicksand-SemiBold",
  },

  imageInput: {
    fontFamily: "Quicksand-SemiBold",
  },
  entirePostContainer: {
    flexDirection: "row",
    padding: 15,
  },
});
