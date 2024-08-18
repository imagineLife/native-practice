import { StyleSheet, View, TouchableOpacity, Text, Alert } from "react-native";
import { theme } from "./../theme";

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
  itemContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: theme.colorCerulean,
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  completedContainer: {
    backgroundColor: theme.colorLightGrey,
    borderBottomColor: theme.colorLightGrey,
  },
  completedText: {
    textDecorationLine: "line-through",
    textDecorationColor: theme.colorGray,
  },
  itemText: { fontSize: 18, fontWeight: "200" },
});

type ListItemProps = {
  name: string;
  completed?: boolean;
};
export function ListItem({ completed, name }: ListItemProps) {
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
    <View
      style={[
        styles.itemContainer,
        completed ? styles.completedContainer : null,
      ]}
    >
      <Text style={[styles.itemText, completed ? styles.completedText : null]}>
        {name}
      </Text>
      <TouchableOpacity
        onPress={handleDelete}
        activeOpacity={0.8}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}
