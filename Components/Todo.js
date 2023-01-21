import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

const TodoList = ({ navigation }) => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    setTodos([...todos, { description: newTodo, completed: false }]);
    setNewTodo("");
  };
  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Welcome! {navigation.getParam("phone")}</Text>
      <TextInput
        style={styles.input}
        value={newTodo}
        onChangeText={setNewTodo}
        placeholder="Enter a new to-do"
      />
      <Button title="Add" onPress={addTodo} />
      {todos.map((todo, index) => (
        <View
          key={index}
          style={{ backgroundColor: index % 2 === 0 ? "green" : "red" }}
        >
          <Text style={{ margin: 10 }}>{todo.description}</Text>
        </View>
      ))}
      <View style={{ margin: 40 }}>
        <Button title="Delete" color="red" onPress={deleteTodo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    margin: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  todoItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  todoText: {
    fontSize: 16,
  },
  label: {
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 20,
  },
});

export default TodoList;
