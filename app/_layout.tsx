import { Stack } from "expo-router";

/*
  screens are in the stack
  - a new page/screen will render "ontop" of the previous screen, in a "stack"!
  - the ONLY reason routes need defining here is to pass props to the pages
*/
export default function AppLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Shopping List" }} />
      <Stack.Screen
        name="counter"
        options={{
          title: "Counter",
          presentation: "modal",
          animation: "slide_from_bottom",
        }}
      />
      <Stack.Screen
        name="idea"
        options={{ title: "Idea", presentation: "modal" }}
      />
    </Stack>
  );
}
