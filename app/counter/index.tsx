import { router } from "expo-router";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Counter() {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.navigate("/idea")}>
        <Text style={{ marginBottom: 18, fontSize: 24, textAlign: "center" }}>
          Go To Idea
        </Text>
      </TouchableOpacity>
      <Text style={styles.text}>Counter</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
  },
});
