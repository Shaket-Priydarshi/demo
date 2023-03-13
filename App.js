import { StyleSheet, View,FlatList } from "react-native";
import GoalItem from "./component/GoalItem";
import GoalInput from "./component/GoalInput";
import { useState } from "react";
export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const changeHandler = (data) => {
    setCourseGoals((currentCourseGoal) => {
      return [
        ...currentCourseGoal,
        { text: data, key: Math.random().toString() },
      ];
    });
  };
const deleteGoalHandler=(id)=>{
 setCourseGoals((currentCourseGoal)=>{
return currentCourseGoal.filter((goal)=>{
  return goal.id!==id
})
 })
}
  return (
    <View style={styles.appContainer}>
      <GoalInput onTextHandler={changeHandler} />
      <View style={styles.goalContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text}
            id={itemData.item.id}
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
