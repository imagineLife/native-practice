import { Tabs } from "expo-router";

/*
  screens are in the stack
  - a new page/screen will render "ontop" of the previous screen, in a "stack"!
  - the ONLY reason routes need defining here is to pass props to the pages
*/
export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Shopping List" }} />
      <Tabs.Screen
        name="counter"
        options={{
          title: "Counter",
        }}
      />
      <Tabs.Screen name="idea" options={{ title: "Idea" }} />
    </Tabs>
  );
}
