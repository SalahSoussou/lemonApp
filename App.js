import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
import WelcomeScreen from "./WelcomeScreen";
import LoginScreen from "./LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Logo() {
  return (
    <Image
      style={{
        height: 40,
        width: 40,
        resizeMode: "contain",
        alignSelf: "center",
      }}
      source={require("./img/logo.png")}
    />
  );
}

export default function App() {
  return (
    <>
      <NavigationContainer>
        <View style={styles.container}>
          <LittleLemonHeader />
          {/* <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              headerStyle: { backgroundColor: "#333333" },
              headerTintColor: "#fff",
              headerTintStyle: { fontWeight: "bold" },
            }}
          >
            <Stack.Screen
              options={{
                title: "Home",
                headerTitle: (props) => <Logo {...props} />,
              }}
              name="Welcome"
              component={WelcomeScreen}
            />
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator> */}
          <Tab.Navigator
            initialRouteName="Login"
            screenOptions={{
              headerStyle: { backgroundColor: "#333333" },
              headerTintColor: "#fff",
              headerTintStyle: { fontWeight: "bold" },
            }}
          >
            <Tab.Screen
              options={{
                title: "Home",
                headerTitle: (props) => <Logo {...props} />,
              }}
              name="Welcome"
              component={WelcomeScreen}
            />
            <Tab.Screen name="Login" component={LoginScreen} />
          </Tab.Navigator>
        </View>
        <View style={styles.footerContainer}>
          <LittleLemonFooter />
        </View>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
  },
  footerContainer: { backgroundColor: "#333333" },
});
