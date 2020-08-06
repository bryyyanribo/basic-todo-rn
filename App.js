import React, { useState} from 'react';
import {
  StyleSheet,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import TodoList from './src/Components/TodoList'
import TodoAdd from './src/Components/TodoAdd';

export default function App() {
  const [todos, setTodos] = useState([
    { name: 'Wash Dishes', id: '1' },
    { name: 'Wipe Screens', id: '2' },
    { name: 'Sweep the Floor', id: '3' },
  ])

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View>
          <TodoAdd
            setTodos= {setTodos}
          />
        </View>

        <View>
            <TodoList
            todos={todos}
            setTodos={setTodos}
            />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 24,
  }
});
