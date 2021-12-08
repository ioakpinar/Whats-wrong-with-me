import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { CATEGORIES, DISEASES } from "../data/dummy-data";
import DiseaseGridTile from "../components/DiseaseGridTile";

const CategoryDiseases = (props) => {
  const renderDiseaseItem = (itemData) => {
    return (
      <DiseaseGridTile
        name={itemData.item.name}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "DiseaseDetail",
            params: {
              diseaseId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  const categoryId = props.navigation.getParam("categoryId");

  const displayedDiseases = DISEASES.filter(
    (disease) => disease.categoryId.indexOf(categoryId) >= 0
  );

  return (
    <View style={styles.screen}>
      <FlatList
        style={{ flex: 1 }}
        data={displayedDiseases}
        keyExtractor={(item, index) => item.id}
        renderItem={renderDiseaseItem}
      />
    </View>
  );
};

CategoryDiseases.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam("categoryId");
  const currentCategory = CATEGORIES.find((q) => q.id == categoryId);

  return {
    headerTitle: currentCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
  },
});

export default CategoryDiseases;
