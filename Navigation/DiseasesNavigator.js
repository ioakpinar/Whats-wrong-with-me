import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import { Platform } from "react-native";

import Categories from "../screens/Categories";
import CategoryDiseases from "../screens/CategoryDiseases";
import DiseaseDetail from "../screens/DiseaseDetail";
import Colors from "../constants/Colors";

const DiseaseNavigator = createStackNavigator(
  {
    Categories: {
      screen: Categories,
      navigationOptions: {
        headerTitle: "Hastalık Kategorileri",
      },
    },
    CategoryDiseases: {
      screen: CategoryDiseases,
    },
    DiseaseDetail: {
      screen: DiseaseDetail,
    },
  },
  {
    mode: Platform.OS === "android" ? "" : "modal",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
    },
  }
);

export default createAppContainer(DiseaseNavigator);
