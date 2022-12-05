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
    marginBottom: 10,
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
    paddingVertical: 12,
    fontFamily: "Quicksand-SemiBold",
    fontSize: 18,
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
    marginLeft: 0,
  },
  inputsContainer: {
    marginTop: -15,
    marginLeft: 20,
  },
  PostContentInput: {
    maxHeight: 200,
    maxWidth: 320,
    width: 320,
    fontSize: 20,
    fontFamily: "Quicksand-SemiBold",
    marginBottom: 65,
  },

  imageUrlContent: {
    maxHeight: 100,
    maxWidth: 320,
    fontSize: 16,
    fontFamily: "Quicksand-SemiBold",
  },

  entirePostContainer: {
    flexDirection: "row",
    padding: 15,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    paddingBottom: 4,
    width: 300,
  },
  pie_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pie: {
    width: 210,
    height: 230,
    marginLeft: 310,
    marginBottom: 10,
    marginTop: 180,
  },
  salad_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  salad: {
    width: 45,
    height: 55,
    marginRight: 359,
    marginLeft: -0,
    marginBottom: 425,
    marginTop: 340,
  },
  apple_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  apple: {
    width: 60,
    height: 65,
    marginTop: 50,
    marginRight: 235,
  },
  imageSelectInput: {
    fontSize: 20,
    fontFamily: "Quicksand-SemiBold",
    color: "#6a0dad",
    marginVertical: 15,
  },

  imagePreview: {
    marginLeft: -90,
    width: 400,
    height: 300,
    borderRadius: 20,
    overflow: "hidden",
  },
});
