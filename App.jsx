import { useState } from 'react';
import { StyleSheet, View, FlatList, Button, Image } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  const startAddNewGoalHandler = () => {
    setModalIsVisible(true)
  }

  const endAddNewGoalHandler = () => {
    setModalIsVisible(false)
  }

  const addGoalHandler = (enteredGoal) => {
    setGoals((prev) => [...prev, { text: enteredGoal, id: Math.random().toString() }])
    endAddNewGoalHandler();
  }

  const deleteGoalHandler = (id) => {
    setGoals((prev) => {
      return prev.filter((goal) => goal.id !== id)
    })
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <View style={styles.button}>
          <Button title='Add New Goal' onPress={startAddNewGoalHandler} color={"#a065ec"} />
        </View>
        <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddNewGoalHandler} />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData) => {
              return <GoalItem text={itemData.item.text} onDeleteItem={deleteGoalHandler} id={itemData.item.id} />
            }
            }
            keyExtractor={(item, index) => {
              return item.id
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 7,
  },
  button: {
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 8
  }
});
