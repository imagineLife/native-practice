import { Stack } from "expo-router";

/*
  screens are in the stack
  - a new page/screen will render "ontop" of the previous screen, in a "stack"!
*/
export default function AppLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Shopping List" }} />
    </Stack>
  );
}
