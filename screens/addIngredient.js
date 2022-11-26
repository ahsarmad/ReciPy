import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Button,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  ImageBackground,
  Pressable,
} from "react-native";
import styles from "../styles/add-styles";
import { useStoreState, useStoreActions } from "easy-peasy";

/* -------------------- Components -------------------- */
import SearchBar from "../components/searchBar";
import { BarCodeScanner } from "expo-barcode-scanner";

export default function AddIngredient({ navigation }) {
  /* -------------------- Local State Variables -------------------- */
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);

  /* -------------------- Redux State Variables -------------------- */
  const selectedIngredients = useStoreState(
    (state) => state.selectedIngredients
  );
  const setSelectedIngredients = useStoreActions(
    (actions) => actions.setSelectedIngredients
  );
  const refresh = useStoreState((state) => state.refresh);
  const setRefresh = useStoreActions((actions) => actions.setRefresh);

  /* -------------------- Redux State Colors -------------------- */
  const headerColor = useStoreState((state) => state.headerColor);
  const pageColor = useStoreState((state) => state.pageColor);
  const bannerColor = useStoreState((state) => state.bannerColor);

  /* -------------------- Handler Functions -------------------- */
  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };
    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const onPress = () => {
    setScanned(false);
    setShouldShow(!shouldShow);
  };

  const selectedListPress = (key) => {
    console.log(`clicked ${key}`);
    let newList = selectedIngredients.filter(
      (ingredient) => ingredient.key != key
    );
    console.log(newList);
    setSelectedIngredients(newList);
  };

  /* -------------------- Render Method -------------------- */
  return (
    <View style={[styles.wholeScreen, { backgroundColor: pageColor }]}>
      {shouldShow ? null : (
        <Pressable
          keyboardShouldPersistTaps="always"
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <View
            style={[styles.pushDown, { backgroundColor: "#2694f9" }]}
          ></View>

          <View
            style={[styles.backButtonSection, { backgroundColor: "#2694f9" }]}
          >
            <ImageBackground
              source={require("../assets/img/banner1.png")}
              style={[styles.banner, { overflow: "hidden" }]}
              resizeMode="contain"
              imageStyle={[{ tintColor: bannerColor }]}
            >
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
              </TouchableOpacity>
            </ImageBackground>
          </View>

          <SearchBar
            selectedIngredients={selectedIngredients}
            setSelectedIngredients={setSelectedIngredients}
          />

          <Button
            title="Barcode Scanner"
            onPress={() => setShouldShow(!shouldShow)}
          />

          <View style={[styles.margins, styles.selected, styles.fontSmall]}>
            <ImageBackground
              source={require("../assets/img/searchItems.png")}
              style={styles.sidesImage}
              resizeMode="contain"
              imageStyle={[{ tintColor: bannerColor }]}
            >
              <View style={[styles.selectedIngredients, styles.outline]}>
                <ScrollView horizontal={true}>
                  {selectedIngredients.map((ingredient) => {
                    return (
                      <Pressable
                        key={ingredient.key}
                        style={[styles.roundBTN, styles.flex]}
                        onPress={() => selectedListPress(ingredient.key)}
                      >
                        <Text style={[styles.fontSmall, styles.textCenter]}>
                          {ingredient.name.replace("_", " ")}
                        </Text>
                      </Pressable>
                    );
                  })}
                </ScrollView>
              </View>
            </ImageBackground>
          </View>
        </Pressable>
      )}
      {shouldShow ? (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      ) : null}
      {scanned && <Button title={"Tap to Return"} onPress={onPress} />}
    </View>
  );
}
