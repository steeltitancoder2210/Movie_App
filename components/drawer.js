import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createAppContainer } from '@react-navigation';
const Drawer=createDrawerNavigator({});
export default createAppContainer(Drawer)