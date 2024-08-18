import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { ListItem } from "./components/ListItem";
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

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});

export default function App() {
  const listIitems = [
    {
      text: "Coffee Water",
      completed: true,
    },
    {
      text: "strawberries",
    },
  ];
  return (
    <View style={s.container}>
      {listIitems.map((itm) => (
        <ListItem name={itm.text} key={itm.text} completed={itm.completed} />
      ))}
      <StatusBar style="auto" />
    </View>
  );
}
