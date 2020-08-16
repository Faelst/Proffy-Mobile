import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TeacherList from "../pages/TeacherList";
import Favorites from "../pages/Favorites";

import { Ionicons } from "@expo/vector-icons";

import styles from "./StyleTabs/index";

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
  return (
    <Navigator tabBarOptions={styles}>
      <Screen
        options={{
          tabBarLabel: "Proffys",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-easel" color={color} size={size}></Ionicons>
          ),
        }}
        name="TeacherList"
        component={TeacherList}
      ></Screen>
      <Screen
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-heart" color={color} size={size}></Ionicons>
          ),
        }}
        name="Favorites"
        component={Favorites}
      ></Screen>
    </Navigator>
  );
}

export default StudyTabs;
