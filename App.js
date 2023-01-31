import { StyleSheet } from "react-native";
import Reg from "./Components/Reg";
import React from "react";
import Login from "./Components/login";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./routes/homeStack";

export default function App() {
  return (
    // <NavigationContainer>
    //   <View style={styles.container}>
    //     <View style={styles.imageContainer}>
    //       <Reg />
    //     </View>
    //     <View style={styles.view2}>
    //       <Login />
    //     </View>
    //     {/*<Hooksform/>*/}
    //   </View>
    // </NavigationContainer>
    <Navigator />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  view2: {
    flex: 1,
  },
  footer: {
    alignItems: "center",
    flex: 0.5,
  },
});
