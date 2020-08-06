import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

const TodoItem = (props) => {
  const removeTodo = (id) => {
    props.setTodos((prev) => {
      return prev.filter(item => item.id != id)
    });
  }

  return (
    <TouchableOpacity onPress={ () => removeTodo(props.item.id) }>
      <Text style={styles.item}>{props.item.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    borderColor: 'gray',
    backgroundColor: '#fff',
    marginTop: 8,
    borderRadius: 4,
    padding: 12,
    borderWidth: 2,
    fontSize: 12,
    margin: 6,
    flex: 1
  }
});

export default TodoItem;