import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Lottie from "lottie-react-native";

import atm from "../../../atm.json";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000"
  },
  button: {
    width: 380,
    height: 45,
    position: "absolute",
    top: 560,
    left: 20,
    backgroundColor: "#7159c1",
    alignSelf: "stretch",
    paddingHorizontal: 20,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonSecond: {
    height: 45,
    width: 380,
    height: 45,
    position: "absolute",
    top: 620,
    left: 20,
    backgroundColor: "#1A73E8",
    alignSelf: "stretch",
    paddingHorizontal: 20,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold"
  }
});

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Lottie source={atm} autoPlay loop />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Main")}
      >
        <Text style={styles.buttonText}>Sou da Casa</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonSecond}
        onPress={() => navigation.navigate("Main")}
      >
        <Text style={styles.buttonText}>Visitante</Text>
      </TouchableOpacity>
    </View>
  );
}
