import { StyleSheet, View,FlatList,Button } from "react-native";
import GoalItem from "./component/GoalItem";
import GoalInput from "./component/GoalInput";
import { useState } from "react";
export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalVisible,setModalvisible]=useState(false);

  const startAddGoalHandler=()=>{
    setModalvisible(true)
  }
  const cancelModal=()=>{
    setModalvisible(false)
  }
  const changeHandler = (data) => {
    setCourseGoals((currentCourseGoal) => {
      return [
        ...currentCourseGoal,
        { text: data, key: Math.random().toString() },
      ];
    });
    cancelModal();
  };
const deleteGoalHandler=(id)=>{
 setCourseGoals((currentCourseGoal)=>{
return currentCourseGoal.filter((goal)=>{
  return goal.key!==id
})
 })
}
  return (
    <View style={styles.appContainer}>
      <Button title="Add New Goal" color='#5e0acc' onPress={startAddGoalHandler}/>
      <GoalInput visible={modalVisible} onTextHandler={changeHandler} onCancel={cancelModal}/>
      <View style={styles.goalContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text}
            id={itemData.item.key}
            onDeleteItem={deleteGoalHandler} />;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },

  goalContainer: {
    flex: 5,
  },
});
