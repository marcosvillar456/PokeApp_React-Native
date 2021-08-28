import React from "react";
import Home from "./components/Home";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import More from "./components/More";
const Drawer = createDrawerNavigator();
export default function Inicio() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Pokemon" component={More} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
