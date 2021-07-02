import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View ,Button,TextInput, TouchableOpacity,ScrollView,FlatList} from 'react-native';

export default function App() {
  const[goal,setGoal] = useState();
  const[courseGoals,setCourseGoals] = useState([]);
  
  const inputHandler = (enteredText) =>{
    setGoal(enteredText);
  }
  const addGoal = () =>{
    setCourseGoals(courseGoals => [...courseGoals,{id:Math.random().toString(),value:goal}]);
    setGoal('');
    
    
  }
  const removeGaol = (goalId) =>{
    setCourseGoals(courseGoals => {
      return courseGoals.filter((goal) => goal.id != goalId);
    })
  }
  
  return (
    
    <View style={{padding:0}}>

     <Text style={styles.titleContainer}>MY FIRST APP</Text>
     <View style={{flexDirection:"row",justifyContent:'space-between',alignItems:"center"}}>
     <TextInput placeholder=" Type your goal here..." style={styles.inputContainer}  onChangeText={setGoal} value={goal} />
     <TouchableOpacity style={styles.button} onPress={addGoal}>
       <Text>Add me</Text>
     </TouchableOpacity>
     </View>
    

    <FlatList 

    data={courseGoals} 
    renderItem = {itemData => (
      <TouchableOpacity onLongPress={()=>removeGaol(itemData.item.id)
      }>
      <View style={styles.listItem}>
      <Text>{itemData.item.value}</Text>
      </View>
      </TouchableOpacity>
    
    )}

     />
 
   
    </View>
    

  );
}

const styles = StyleSheet.create({
  button:{marginBottom:20,marginRight:10,marginTop:70,borderRadius:10,backgroundColor:"#E1F1DD",height:30,width:100,alignItems:"center",justifyContent:"center"},
  inputContainer:{marginBottom:20,marginLeft:10,marginTop:70,paddingLeft:10,paddingRight:10,borderRadius:10,borderColor:"gray",borderWidth:2,height:30,width:200},
  titleContainer:{textAlign:"center",top:50,fontWeight:"bold",fontSize:20,alignItems:"center",color:"#393E46"},
  listItem:{padding:10,marginLeft:50,marginBottom:5,backgroundColor:"#DBE6FD",borderRadius:10,width:250,alignItems:"center"}
});


