import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { DISEASES } from "../data/dummy-data";

const DiseaseDetail = (props) => {
  const diseaseId = props.navigation.getParam("diseaseId");
  const currentDisease = DISEASES.find((disease) => disease.id == diseaseId);
  console.log(currentDisease);

  return (
    <View>
      <Text>{currentDisease.name}</Text>
    </View>
  );
};

DiseaseDetail.navigationOptions = (navigationData) => {
  const diseaseId = navigationData.navigation.getParam("diseaseId");
  const currentDisease = DISEASES.find((q) => q.id == diseaseId);

  return {
    headerTitle: currentDisease.name,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DiseaseDetail;
