import { useState } from "react";
import { Button, Image, Modal, StyleSheet, Text, TextInput, View } from "react-native"

const GoalInput = ({ onAddGoal, visible, onCancel }) => {

  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    onAddGoal(enteredGoal)
    setEnteredGoal("")
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require("../assets/goal.png")} style={styles.imageConatainer} />
        <TextInput value={enteredGoal} onChangeText={goalInputHandler} placeholder='Type your goal here' style={styles.textInput} />
        <View style={styles.buttonConatiner}>
          <View style={styles.button}>
            <Button title='Cancel' onPress={onCancel} color={"#f31282"} />
          </View>
          <View style={styles.button}>
            <Button title='Add Goal!' onPress={addGoalHandler} color={"#b180f0"} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    flex: 1,
    backgroundColor: "#311b6b"
  },
  imageConatainer: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    borderRadius: 6,
    backgroundColor: "#e4d0ff",
    width: "100%",
    padding: 16,
    color: "#120438"
  },
  buttonConatiner: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 16
  },
  button: {
    width: "49%",
    overflow: 'hidden',
    borderRadius: 10
  },
})