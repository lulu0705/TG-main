import 'react-native-gesture-handler';
import React from "react";
import { StyleSheet, StatusBar, SafeAreaView } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import Tabs from "./navigation/Tabs";
import MainContainer from "./navigation/MainContainer";

const App = () => {
  return (
    <NavigationContainer>
    <Tabs/>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFAF2",
  },
});

export default App;
