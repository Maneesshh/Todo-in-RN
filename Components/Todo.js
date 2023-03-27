import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const TodoList = ({ navigation }) => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [userData, setUserData] = useState({});
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const email = await AsyncStorage.getItem("email");
      const password = await AsyncStorage.getItem("password");
      setUserData({ email, password });
    } catch (error) {
      console.log(error);
    }
  };
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
      <FontAwesomeIcon icon={faUser} size={50} />
      <Text style={styles.label}>
        Welcome {userData.email}
        {navigation.getParam("phone")}
      </Text>
      <TextInput
        style={styles.input}
        value={newTodo}
        onChangeText={setNewTodo}
        placeholder="Enter a new to-do"
      />
      <View style={styles.button}>
        <Button title="Add" onPress={addTodo} />
      </View>
      {todos.map((todo, index) => (
        <View
          key={index}
          style={{
            backgroundColor: index % 2 === 0 ? "green" : "red",
            margin: 20,
          }}
        >
          <Text style={{ margin: 10 }}>{todo.description}</Text>
        </View>
      ))}
      <View style={styles.button}>
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
  button: {
    margin: 10,
    marginLeft: 50,
    marginRight: 50,
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
