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

const CategoryGridTile = (props) => {
  let TouchableComponent = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <TouchableComponent style={{ flex: 1 }} onPress={props.onSelect}>
        <View style={styles.itemBackground}>
          <Text style={styles.itemText}>{props.title}</Text>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 130,
  },
  itemText: {
    color: Colors.primaryColor,
    fontFamily: "open-sans-bold",
    fontSize: 15,
    textAlign: "right",
  },
  itemBackground: {
    backgroundColor: Colors.textColor,
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 8,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryGridTile;
