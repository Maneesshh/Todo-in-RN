import { StyleSheet, View, Text } from "react-native";

const PlaceholderImage = require("./assets/Images/ggg.jpg");
import ImageViewer from "./Components/ImageViewer";
import Todo from "./Components/Todo";
import Rct from "./Components/RCt";
import Hooksform from "./Components/Hooksform";
import Reg from "./Components/Reg";
import React from "react";
import Login from "./Components/login";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          {/*    <ImageViewer placeholderImageSource={PlaceholderImage} />*/}
          {/*</View>*/}
          {/* <View style={styles.footer}>*/}
          {/* /!*<Button theme="primary" title="Click Me Please !"/>*!/*/}
          {/*   </View>*/}
          {/*<Todo/>*/}
          <Reg />
        </View>
        <View style={styles.view2}>
          <Login />
        </View>
        {/*<Hooksform/>*/}
      </View>
    </NavigationContainer>
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
