import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import PlacesNavigator from "./places";
import TabsNavigator from "./tabs";

export default () => (
  <NavigationContainer>
    {/* <PlacesNavigator /> */}
    <TabsNavigator/>
  </NavigationContainer>
);
