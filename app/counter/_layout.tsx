import { Link, Stack } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { theme } from "../../theme";
export default function CounterLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Counter",
          headerRight: () => (
            <Link href="/counter/history">
              <MaterialIcons name="history" size={32} color={theme.colorGray} />
            </Link>
          ),
        }}
      />
    </Stack>
  );
}
