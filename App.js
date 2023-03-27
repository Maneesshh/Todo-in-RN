import { StyleSheet } from "react-native";
import React from "react";

import Navigator from "./routes/homeStack";

export default function App() {
  return <Navigator />;
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
