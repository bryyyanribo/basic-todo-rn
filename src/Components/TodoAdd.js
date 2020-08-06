import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Keyboard,
  Alert
} from 'react-native';

const TodoAdd = (props) => {
  const [todo, setTodo] = useState('')
  const addTodo = (text) => {
    if(text.length >= 3) {
      props.setTodos(prev => {
        const newItem = {
          name: text,
          id: Math.random().toString()
        };
        return [
          ...prev,
          newItem
        ]
      })
      setTodo('')
    } else {
      return (
      Alert.alert('Error', 'Must be 3 characters long', [{
      text: 'Ok', onPress: () => console.log('Ok') }])
      )
    }

    Keyboard.dismiss()
  };


  return (
    <View>
      <TextInput
        onChangeText={(text) => setTodo(text)}
        style={ styles.field }
        value = {todo}
      />
      <Button
        title="Add Todo"
        onPress={() => addTodo(todo) }/>
    </View>

   );
}

const styles = StyleSheet.create({
  field: {
    height: 32,
    borderColor: 'gray',
    borderWidth: 1
  }
});

export default TodoAdd;