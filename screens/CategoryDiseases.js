import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CategoryDiseases = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Category Disease Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryDiseases;
