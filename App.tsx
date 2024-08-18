import { StatusBar } from "expo-status-bar";
import {
  TouchableOpacity,
  // PixelRatio,
  StyleSheet,
  Text,
  View,
  Alert,
} from "react-native";
import { theme } from "./theme";
/*
  React-Native v. html elements
  View
    div
  Text
    p, etc.


  
  - CONDITIONS can be a little different in react-native
    - falsey will render on the screen
    - try for {NaN ? ...val : null}
  - React-Native Button is never really used - it can't be styled

*/

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colorBlack,
    padding: 8,
    borderRadius: 6,
  },
  buttonText: {
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
    color: theme.colorWhite,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  itemContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#1a759f",
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  itemText: { fontSize: 18, fontWeight: "200" },
});

export default function App() {
  const { button, buttonText, container, itemContainer, itemText } = styles;

  const handleDelete = () => {
    Alert.alert(
      "Are you sure you want to delete this?",
      "It will be gone for good",
      [
        {
          text: "Yes",
          onPress: () => console.log("deleting..."),
          style: "destructive",
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ],
    );
  };

  return (
    <View style={container}>
      <View style={itemContainer}>
        <Text style={itemText}>Coffee</Text>
        <TouchableOpacity
          onPress={handleDelete}
          activeOpacity={0.8}
          style={button}
        >
          <Text style={buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
