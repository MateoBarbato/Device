import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import TabsNavigator from "./tabs";

export default  () => (
  <NavigationContainer>
    <TabsNavigator/>
  </NavigationContainer>
);
