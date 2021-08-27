import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import Home from "./components/Home";
import Card from "./components/Card";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import More from "./components/More";
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Pokemon" component={More} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
