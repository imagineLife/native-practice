import { StatusBar } from "expo-status-bar";
import { PixelRatio, StyleSheet, Text, View } from "react-native";

/*
  React-Native v. html elements
  View
    div
  Text
    p, etc.


  
  - CONDITIONS can be a little different in react-native
    - falsey will render on the screen
    - try for {NaN ? ...val : null}
  
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#1a759f",
          paddingHorizontal: 8,
          paddingVertical: 16,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "200" }}>
          Open up App.tsx to start working on your app!
        </Text>
        <Text>{PixelRatio.get()} Pixel Ratio</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
