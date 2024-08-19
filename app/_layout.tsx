import { AntDesign, Feather, FontAwesome5 } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { theme } from "../theme";
/*
  screens are in the stack
  - a new page/screen will render "ontop" of the previous screen, in a "stack"!
  - the ONLY reason routes need defining here is to pass props to the pages
*/
export default function AppLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: theme.colorCerulean }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Shopping List",
          tabBarIcon: ({ color, size }) => {
            return <Feather name="list" size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="counter"
        options={{
          title: "Counter",
          tabBarIcon: ({ color, size }) => {
            return <AntDesign name="clockcircleo" size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="idea"
        options={{
          title: "Idea",
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome5 name="lightbulb" size={size} color={color} />;
          },
        }}
      />
    </Tabs>
  );
}
