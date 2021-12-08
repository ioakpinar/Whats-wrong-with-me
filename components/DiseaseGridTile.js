import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
} from "react-native";
import Colors from "../constants/Colors";

const DiseaseGridTile = (props) => {
  let TouchableComponent = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <TouchableComponent style={{ flex: 1 }} onPress={props.onSelect}>
        <View style={styles.itemBackground}>
          <Text style={styles.itemText}>{props.name}</Text>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    margin: 15,
    height: 70,
  },
  itemText: {
    color: Colors.textColor,
    fontFamily: "open-sans-bold",
    fontSize: 15,
  },
  itemBackground: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 30,
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 8,
    padding: 25,
    alignItems: "center",
  },
});

export default DiseaseGridTile;
