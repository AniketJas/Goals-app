import { StyleSheet, Text, View, Pressable } from "react-native"

const GoalItem = ({ text, onDeleteItem, id }) => {
  return (
    <View style={styles.goalItems}>
      <Pressable android_ripple={{ color: "#210644" }} onPress={onDeleteItem.bind(this, id)} style={({ pressed }) => pressed && styles.pressedItem}>
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  )
}

export default GoalItem

const styles = StyleSheet.create({
  goalItems: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
    padding: 6,
  },
  pressedItem: {
    opacity: 0.7
  }
});