import { StyleSheet,View, Text,Pressable } from "react-native"; 
const GoalItem=({text,onDeleteItem,id})=>{

return (
    <View style={styles.goalItem}>
    <Pressable onPress={onDeleteItem.bind(this,id)}
    style={({pressed})=> pressed && styles.pressItem}
    >
    <Text style={styles.goalText}>{text}</Text>
    </Pressable>
  </View>

)
}
export default GoalItem;
const styles=StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
    },
    goalText: {
        color: "white",
        padding: 8,
      },
      pressItem:{
        opacity:0.5
      }
})