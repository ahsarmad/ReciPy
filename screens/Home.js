// import React, { useState, useEffect, useContext } from "react";
// import {
//   Text,
//   View,
//   Image,
//   Pressable,
//   TouchableWithoutFeedback,
//   Keyboard,
//   ScrollView,
//   TouchableOpacity,
//   ImageBackground,
//   FlatList,
// } from "react-native";
// import { useStoreState, useStoreActions } from "easy-peasy";
// import { LinearGradient } from "expo-linear-gradient";
// import { AuthContext } from "../Context/AuthContext";

// import styles from "../styles/home-styles";

// export default function Home({ navigation }) {
//   const { userInfo } = useContext(AuthContext);

//   /* -------------------- Local State Variables -------------------- */
//   let Recipes = [];
//   const [isLoading, setLoading] = useState(true);
//   const [data, setData] = useState([]);
//   console.log(data);

//   // useEffect(() => {
//   //   fetch('http://127.0.0.1:5000/search/apple')
//   //     .then((response) => response.json())
//   //     .then((json) => setData(json))
//   //     .catch((error) => console.error(error))
//   //     .finally(() => setLoading(false));
//   // }, []);

//   /* -------------------- Redux State Variables -------------------- */
//   const ingredients = useStoreState((state) => state.ingredients);
//   const setCategory = useStoreActions((actions) => actions.setCategory);
//   const setCategoryList = useStoreActions((actions) => actions.setCategoryList);
//   const selectedIngredients = useStoreState(
//     (state) => state.selectedIngredients
//   );

//   const generateColor = useStoreState((state) => state.generateColor);
//   const haveIngredients = useStoreState((state) => state.haveIngredients);
//   const generateRecipes = useStoreState((state) => state.generateRecipes);
//   const setGenerateRecipes = useStoreActions(
//     (actions) => actions.setGenerateRecipes
//   );

//   /* -------------------- Redux State Colors -------------------- */
//   const headerColor = useStoreState((state) => state.headerColor);
//   const pageColor = useStoreState((state) => state.pageColor);
//   const bannerColor = useStoreState((state) => state.bannerColor);

//   /* -------------------- Handler Functions -------------------- */
//   const addIngredientHandler = () => {
//     navigation.navigate("AddIngredient");
//   };

//   const profilePressHandler = () => {
//     navigation.navigate("Account");
//   };

//   const categoryPressHandler = () => {
//     navigation.navigate("Category");
//   };

//   const getRecipes = async () => {
//     try {
//       const response = await fetch("http://127.0.0.1:5000/search/apple");
//       const json = await response.json();
//       console.log(json);
//       Recipes[0] = json;
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const pressGenerate = () => {
//     if (haveIngredients) {
//       setGenerateRecipes();
//     }
//     return;
//   };

//   const pressFruit = () => {
//     setCategory("Fruits");
//     setCategoryList(
//       ingredients.filter((ingredient) => ingredient["type"] == "fruit")
//     );
//     categoryPressHandler();
//   };

//   const pressProtein = () => {
//     setCategory("Protein");
//     setCategoryList(
//       ingredients.filter(
//         (ingredient) =>
//           ingredient["type"] == "meat" || ingredient["type"] == "fish"
//       )
//     );
//     categoryPressHandler();
//   };

//   const pressDairy = () => {
//     setCategory("Dairy");
//     setCategoryList(
//       ingredients.filter((ingredient) => ingredient["type"] == "dairy")
//     );
//     categoryPressHandler();
//   };

//   const pressVeggies = () => {
//     setCategory("Veggies");
//     setCategoryList(
//       ingredients.filter((ingredient) => ingredient["type"] == "vegetable")
//     );
//     categoryPressHandler();
//   };

//   const pressGrain = () => {
//     setCategory("Grain");
//     setCategoryList(
//       ingredients.filter((ingredient) => ingredient["type"] == "grains")
//     );
//     categoryPressHandler();
//   };
//   const pressHerbs = () => {
//     setCategory("Herbs");
//     setCategoryList(
//       ingredients.filter(
//         (ingredient) =>
//           ingredient["type"] == "herbs" || ingredient["type"] == "nuts"
//       )
//     );
//     categoryPressHandler();
//   };

//   /* -------------------- Test Data -------------------- */
//   const recipes = [
//     { image: "../assets/img/caesar-salad.jpg", name: "Caesar Salad" },
//     { image: "../assets/img/chicken-chow-mein.jpg", name: "Chicken Chow Mein" },
//     {
//       image: "../assets/img/swedish-meatballs.jpeg",
//       name: "Swedish Meatballs",
//     },
//   ];

//   /* -------------------- Render Method -------------------- */
//   return (
//     <View style={[styles.wholeScreen, { backgroundColor: pageColor }]}>
//       <ScrollView>
//         <TouchableWithoutFeedback
//           onPress={() => {
//             Keyboard.dismiss();
//           }}
//         >
//           <View>
//             {/* <View
//               style={[styles.pushDown, { backgroundColor: headerColor }]}
//             ></View> */}

//             <ImageBackground
//               source={require("../assets/img/banner3.png")}
//               style={[styles.banner]}
//               imageStyle={[{ tintColor: "#2196F3" }]}
//             >
//               <Image
//                 source={require("../assets/img/recipylogo.png")}
//                 style={[styles.logo]}
//               />
//               {/* <TouchableOpacity
//                 onPress={profilePressHandler}
//                 style={[styles.absolute]}
//               >
//                 <Image
//                   source={require("../assets/icons/chef6.png")}
//                   style={[styles.accountIcon]}
//                 />
//               </TouchableOpacity> */}

//               {/* <LinearGradient
//                 style={styles.helloMessageContainer}
//                 // Background Linear Gradient
//                 colors={["#2694f9", "lightblue", "#2694f9"]}
//               >
//                 <Text style={styles.helloMessage}>Hi {userInfo.name}!</Text>
//               </LinearGradient> */}
//             </ImageBackground>

//             <View style={[styles.container]}>
//               <Pressable
//                 onPress={addIngredientHandler}
//                 style={[styles.addButton, { backgroundColor: headerColor }]}
//               >
//                 <Text
//                   style={[styles.fontMedium, { fontFamily: "AmaticSC-Bold" }]}
//                 >
//                   Add Ingredient
//                 </Text>
//               </Pressable>
//               <Pressable
//                 onPress={pressGenerate}
//                 style={[styles.addButton, { backgroundColor: generateColor }]}
//               >
//                 <Text
//                   style={[styles.fontMedium, { fontFamily: "AmaticSC-Bold" }]}
//                 >
//                   Generate Recipes
//                 </Text>
//               </Pressable>
//             </View>

//             <View>
//               <ImageBackground
//                 source={require("../assets/img/categories.png")}
//                 resizeMode="contain"
//                 style={[styles.caterories]}
//               >
//                 <TouchableOpacity
//                   style={[
//                     styles.categoryButton,
//                     styles.category1,
//                     { backgroundColor: headerColor },
//                   ]}
//                   onPress={pressFruit}
//                 >
//                   <Text style={[styles.categoryText]}>Fruits</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={[
//                     styles.categoryButton,
//                     styles.category2,
//                     { backgroundColor: headerColor },
//                   ]}
//                   onPress={pressProtein}
//                 >
//                   <Text style={[styles.categoryText]}>Protein</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={[
//                     styles.categoryButton,
//                     styles.category3,
//                     { backgroundColor: headerColor },
//                   ]}
//                   onPress={pressDairy}
//                 >
//                   <Text style={[styles.categoryText]}>Dairy</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={[
//                     styles.categoryButton,
//                     styles.category4,
//                     { backgroundColor: headerColor },
//                   ]}
//                   onPress={pressVeggies}
//                 >
//                   <Text style={[styles.categoryText]}>Veggies</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={[
//                     styles.categoryButton,
//                     styles.category5,
//                     { backgroundColor: headerColor },
//                   ]}
//                   onPress={pressGrain}
//                 >
//                   <Text style={[styles.categoryText]}>Grain</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={[
//                     styles.categoryButton,
//                     styles.category6,
//                     { backgroundColor: headerColor },
//                   ]}
//                   onPress={pressHerbs}
//                 >
//                   <Text style={[styles.categoryText]}>Herbs</Text>
//                 </TouchableOpacity>
//               </ImageBackground>
//             </View>

//             {generateRecipes ? (
//               <View>
//                 <View>
//                   <Text style={[styles.fontLarge, styles.recipeText]}>
//                     Recipes:{" "}
//                   </Text>
//                 </View>
//                 <Text>{Recipes[0]}</Text>
//                 <View style={[styles.recipeView]}>
//                   <ScrollView horizontal={true}>
//                     <View>
//                       <ImageBackground
//                         source={require("../assets/img/caesar-salad.jpg")}
//                         style={[styles.recipeImages]}
//                       >
//                         <Text
//                           style={[
//                             styles.outline,
//                             styles.title,
//                             styles.fontSmall,
//                           ]}
//                         >
//                           Caesar Salad
//                         </Text>
//                       </ImageBackground>
//                     </View>
//                     <View style={[styles.outline]}>
//                       <ImageBackground
//                         source={require("../assets/img/chicken-chow-mein.jpg")}
//                         style={[styles.recipeImages]}
//                       >
//                         <Text
//                           style={[
//                             styles.outline,
//                             styles.title,
//                             styles.fontSmall,
//                           ]}
//                         >
//                           Chicken Chow
//                         </Text>
//                       </ImageBackground>
//                     </View>
//                   </ScrollView>
//                 </View>
//               </View>
//             ) : (
//               <View style={[styles.outline, styles.selectedIngredients]}></View>
//             )}
//           </View>
//         </TouchableWithoutFeedback>

//         <View style={{ flex: 1, padding: 24 }}>
//           {isLoading ? (
//             <Text>Loading...</Text>
//           ) : (
//             <View
//               style={{
//                 flex: 1,
//                 flexDirection: "column",
//                 justifyContent: "space-between",
//               }}
//             >
//               <Text
//                 style={{ fontSize: 18, color: "green", textAlign: "center" }}
//               >
//                 {data.DESCRIPTION}
//               </Text>
//             </View>
//           )}
//         </View>

//         <View style={[styles.navView]}></View>
//       </ScrollView>
//     </View>
//   );
// }

import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from "react-native";
import { useStoreState, useStoreActions } from "easy-peasy";
import axios from "axios";

import styles from "../styles/home-styles";

export default function Home({ navigation }) {
  /* -------------------- Local State Variables -------------------- */
  const [recievedData, setRecievedData] = useState(false);

  /* -------------------- Redux State Variables -------------------- */
  const refresh = useStoreState((state) => state.refresh);
  const setRefresh = useStoreActions((actions) => actions.setRefresh);
  const ingredients = useStoreState((state) => state.ingredients);
  const setCategory = useStoreActions((actions) => actions.setCategory);
  const setCategoryList = useStoreActions((actions) => actions.setCategoryList);
  const selectedIngredients = useStoreState(
    (state) => state.selectedIngredients
  );
  const setSelectedIngredients = useStoreActions(
    (actions) => actions.setSelectedIngredients
  );
  const haveIngredints = useStoreState((state) => state.haveIngredients);
  const setHaveIngredients = useStoreActions(
    (actions) => actions.setHaveIngredients
  );

  const Recipes = useStoreState((state) => state.Recipes);
  const setRecipes = useStoreActions((actions) => actions.setRecipes);
  const setCurrentRecipeMacros = useStoreActions(
    (actions) => actions.setCurrentRecipeMacros
  );
  const setCurrentRecipeTitle = useStoreActions(
    (actions) => actions.setCurrentRecipeTitle
  );
  const setCurrentRecipe = useStoreActions(
    (actions) => actions.setCurrentRecipe
  );
  const setIngredientsRequired = useStoreActions(
    (actions) => actions.setIngredientsRequired
  );
  const setRecipeDescription = useStoreActions(
    (actions) => actions.setRecipeDescription
  );
  const setSteps = useStoreActions((actions) => actions.setSteps);
  const setRecipeLink = useStoreActions((actions) => actions.setRecipeLink);
  const setRecipeID = useStoreActions((actions) => actions.setRecipeID);

  const generateColor = useStoreState((state) => state.generateColor);
  const haveIngredients = useStoreState((state) => state.haveIngredients);
  const generateRecipes = useStoreState((state) => state.generateRecipes);
  const setGenerateRecipes = useStoreActions(
    (actions) => actions.setGenerateRecipes
  );

  const dietOption = useStoreState((state) => state.dietOption);
  const removedIngredients = useStoreState((state) => state.removedIngredients);

  const pantryItems = useStoreState((state) => state.pantryItems);
  const likedRecipes = useStoreState((state) => state.likedRecipes);
  const recommendedRecipes = useStoreState((state) => state.recommendedRecipes);
  const setRecommendedRecipes = useStoreActions(
    (actions) => actions.setRecommendedRecipes
  );
  const setRenderedRecommended = useStoreActions(
    (actions) => actions.setRenderedRecommended
  );

  /* -------------------- Redux State Colors -------------------- */
  const headerColor = useStoreState((state) => state.headerColor);
  const pageColor = useStoreState((state) => state.pageColor);
  const bannerColor = useStoreState((state) => state.bannerColor);

  /* -------------------- Handler Functions -------------------- */
  const addIngredientHandler = () => {
    navigation.navigate("AddIngredient");
  };
  const profilePressHandler = () => {
    navigation.navigate("Account");
  };
  const categoryPressHandler = () => {
    navigation.navigate("Category");
  };
  const navToRecipe = () => {
    navigation.navigate("Recipe");
  };

  const getRecipes = async (ingredients) => {
    await axios({
      method: "get",
      url:
        "https://recipy-ingredients-backend.herokuapp.com/search/" +
        ingredients,
    })
      .then((response) => {
        setRecipes(response.data);
      })
      .then(() => {
        console.log(Recipes);
        setRefresh(!refresh);
      });
    setRefresh(!refresh);
  };

  const pressGenerate = async () => {
    if (haveIngredients && generateRecipes) {
      setGenerateRecipes();
    }
    if (haveIngredients && !generateRecipes) {
      let ingredientString = returnIngredientString(
        selectedIngredients,
        "name"
      );
      await getRecipes(ingredientString);
      setGenerateRecipes();
      setRecievedData(true);
    }
    return;
  };

  const returnIngredientString = (ingredients, attr) => {
    let output = [];
    for (let i = 0; i < ingredients.length; i++) {
      output.push(ingredients[i][attr]);
    }
    return output.join(",");
  };

  const recipePressHandler = (
    title = "Loading...",
    desc = "Loading...",
    macros = "Loading...",
    reqs = "Loading...",
    steps = "Loading...",
    recipe = "Loading...",
    link = "Loading...",
    id = "Loading..."
  ) => {
    setCurrentRecipeTitle(title);
    setRecipeDescription(desc);
    setCurrentRecipeMacros(macros);
    setIngredientsRequired(reqs);
    setSteps(steps);
    setCurrentRecipe(recipe);
    setRecipeLink(link);
    setRecipeID(id);
    navToRecipe();
  };

  const pressFruit = () => {
    setCategory("Fruits");
    setCategoryList(
      ingredients.filter((ingredient) => ingredient["type"] == "fruit")
    );
    categoryPressHandler();
  };

  const pressProtein = () => {
    setCategory("Protein");
    setCategoryList(
      ingredients.filter(
        (ingredient) =>
          ingredient["type"] == "meat" || ingredient["type"] == "fish"
      )
    );
    categoryPressHandler();
  };

  const pressDairy = () => {
    setCategory("Dairy");
    setCategoryList(
      ingredients.filter((ingredient) => ingredient["type"] == "dairy")
    );
    categoryPressHandler();
  };

  const pressVeggies = () => {
    setCategory("Veggies");
    setCategoryList(
      ingredients.filter((ingredient) => ingredient["type"] == "vegetable")
    );
    categoryPressHandler();
  };

  const pressGrain = () => {
    setCategory("Grain");
    setCategoryList(
      ingredients.filter((ingredient) => ingredient["type"] == "grains")
    );
    categoryPressHandler();
  };

  const pressHerbs = () => {
    setCategory("Herbs");
    setCategoryList(
      ingredients.filter(
        (ingredient) =>
          ingredient["type"] == "herbs" || ingredient["type"] == "nuts"
      )
    );
    categoryPressHandler();
  };

  const selectedListPress = (ingredientObj) => {
    let newList = selectedIngredients.filter(
      (ingredient) => ingredient.id != ingredientObj.id
    );
    setSelectedIngredients(newList);
    setHaveIngredients();
    setRefresh(!refresh);
    if (newList.length == 0) {
      setGenerateRecipes();
      setRecievedData(false);
    }
    setRefresh(!refresh);
    console.log(
      `removed ${ingredientObj.name} num ingredients: ${newList.length}`
    );
  };

  useEffect(() => {
    axios({
      method: "get",
      url: `http://recipy-ingredients-backend.herokuapp.com/recommend/${returnIngredientString(
        likedRecipes,
        "id"
      )}/${returnIngredientString(pantryItems, "name")}`,
    })
      .then((response) => {
        setRecommendedRecipes(response.data);
      })
      .then(() => {
        console.log("Response: ", recommendedRecipes);
        setRefresh(!refresh);
      });
    setRefresh(!refresh);
    setRenderedRecommended();
  }, []);

  // console.log("Test names: ", returnIngredientString(pantryItems, 'name'))

  /* -------------------- Render Method -------------------- */
  return (
    <View style={[styles.wholeScreen, { backgroundColor: pageColor }]}>
      <ScrollView>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <View>
            <ImageBackground
              source={require("../assets/img/banner3.png")}
              style={[styles.banner]}
              imageStyle={[{ tintColor: "#2196F3" }]}
            >
              <Image
                source={require("../assets/img/recipylogo.png")}
                style={[styles.logo]}
              />
            </ImageBackground>

            <View style={[styles.container]}>
              <Pressable
                onPress={addIngredientHandler}
                style={[styles.addButton, { backgroundColor: headerColor }]}
              >
                <Text
                  style={[styles.fontMedium, { fontFamily: "AmaticSC-Bold" }]}
                >
                  Add Ingredient
                </Text>
              </Pressable>

              <Pressable
                onPress={pressGenerate}
                style={[styles.addButton, { backgroundColor: generateColor }]}
              >
                <Text
                  style={[styles.fontMedium, { fontFamily: "AmaticSC-Bold" }]}
                >
                  Generate Recipes
                </Text>
              </Pressable>
            </View>

            <View>
              <ImageBackground
                source={require("../assets/img/categories.png")}
                resizeMode="contain"
                style={[styles.caterories]}
              >
                <TouchableOpacity
                  style={[
                    styles.categoryButton,
                    styles.category1,
                    { backgroundColor: headerColor },
                  ]}
                  onPress={pressFruit}
                >
                  <Text style={[styles.categoryText]}>Fruits</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.categoryButton,
                    styles.category2,
                    { backgroundColor: headerColor },
                  ]}
                  onPress={pressProtein}
                >
                  <Text style={[styles.categoryText]}>Protein</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.categoryButton,
                    styles.category3,
                    { backgroundColor: headerColor },
                  ]}
                  onPress={pressDairy}
                >
                  <Text style={[styles.categoryText]}>Dairy</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.categoryButton,
                    styles.category4,
                    { backgroundColor: headerColor },
                  ]}
                  onPress={pressVeggies}
                >
                  <Text style={[styles.categoryText]}>Veggies</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.categoryButton,
                    styles.category5,
                    { backgroundColor: headerColor },
                  ]}
                  onPress={pressGrain}
                >
                  <Text style={[styles.categoryText]}>Grain</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.categoryButton,
                    styles.category6,
                    { backgroundColor: headerColor },
                  ]}
                  onPress={pressHerbs}
                >
                  <Text style={[styles.categoryText]}>Herbs</Text>
                </TouchableOpacity>
              </ImageBackground>
            </View>

            <View>
              <Text style={[styles.fontLarge, styles.recipeText]}>
                Selected Ingredients:{" "}
              </Text>
            </View>

            <View
              style={[
                styles.selectedIngredients,
                styles.outline,
                styles.margins,
              ]}
            >
              <ScrollView horizontal={true}>
                {selectedIngredients.map((ingredient) => {
                  return (
                    <Pressable
                      key={ingredient.id}
                      style={[styles.roundBTN, styles.flex]}
                      onPress={() => selectedListPress({ ...ingredient })}
                    >
                      <Text style={[styles.fontSmall, styles.textCenter]}>
                        {ingredient.name.replace("_", " ")}
                      </Text>
                    </Pressable>
                  );
                })}
              </ScrollView>
            </View>

            {recievedData && generateRecipes ? (
              <View>
                <View>
                  <Text style={[styles.fontLarge, styles.recipeText]}>
                    You have {Object.values(Recipes["TITLE"]).length} Recipe(s):{" "}
                  </Text>
                </View>

                <View style={[styles.recipeView]}>
                  <ScrollView horizontal={true}>
                    {/* <Pressable 
                  style={[styles.outline, styles.card]}
                  onPress={() => recipePressHandler('Title Loading...', 'Desc Loading...', 'Macros Loading...', 'Reqs Loading...', 'Steps Loading...', 'Recipe Loading...')}
                >
                  <ImageBackground
                    source={require('../img/recipeBack.jpg')}
                    style={[styles.recipeBack]}
                  >
                    <Text style={[styles.recipePressableText]}>Recipe Title</Text>
                  </ImageBackground>
                </Pressable> */}

                    {Object.values(Recipes["TITLE"]).map((recipe, index) => {
                      return (
                        <Pressable
                          key={index}
                          style={[styles.outline, styles.card]}
                          onPress={() =>
                            recipePressHandler(
                              Object.values(Recipes["TITLE"])[index],
                              Object.values(Recipes["DESCRIPTION"])[index],
                              Object.values(Recipes["MACROS"])
                                [index].split("\n")
                                .join(" ")
                                .split(",")
                                .join(", "),
                              Object.values(Recipes["has_ingredients"])[index],
                              Object.values(Recipes["INGREDIENTS"])[index],
                              Object.values(Recipes["DIRECTIONS"])[index],
                              Object.values(Recipes["LINK"])[index],
                              Object.keys(Recipes["LINK"])[index]
                            )
                          }
                        >
                          <ImageBackground
                            source={require("../assets/img/recipe2.png")}
                            style={[styles.recipeBack]}
                          >
                            <Text style={[styles.recipePressableText]}>
                              {Object.values(Recipes["TITLE"])[index]}
                            </Text>
                          </ImageBackground>
                        </Pressable>
                      );
                    })}
                  </ScrollView>
                </View>
              </View>
            ) : (
              <View style={[styles.outline, styles.selectedIngredients]}></View>
            )}
          </View>
        </TouchableWithoutFeedback>

        <View style={[styles.navView]}></View>
      </ScrollView>
    </View>
  );
}
