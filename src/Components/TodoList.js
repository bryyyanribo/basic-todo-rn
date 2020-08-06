import React from 'react';
import {
  FlatList,
} from 'react-native';
import TodoItem from './TodoItem';

const TodoList = (props) => {

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={props.todos}
      renderItem={({ item }) => (
        <TodoItem
          item={ item }
          setTodos={props.setTodos}
        />
      )}
    />
   );
}

export default TodoList;