import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import Categories from "../screens/Categories";
import CategoryDiseases from "../screens/CategoryDiseases";
import DiseaseDetail from "../screens/DiseaseDetail";

const DiseaseNavigator = createStackNavigator({
  Categories: {
    screen: Categories,
  },
  CategoryDiseases: {
    screen: CategoryDiseases,
  },
  DiseaseDetail: {
    screen: DiseaseDetail,
  },
});

export default createAppContainer(DiseaseNavigator);
