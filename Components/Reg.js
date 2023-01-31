import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Button,
  TouchableOpacity,
} from "react-native";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Feather from "react-native-vector-icons/Feather";

const schema = yup.object().shape({
  fullName: yup.string().required(),
  email: yup.string().email().required(),
  age: yup.number().min(1).max(100).required(),
  password: yup.string().min(8).max(32).required(),
});
const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("Email", jsonValue);
  } catch (e) {
    console.log(e);
  }
};
const getMyObject = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("Email");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {}

  console.log("Done.");
};
export default ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(true);
  const {
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      age: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  return (
    <View style={styles.container}>
      <Text style={styles.label}> Full Name</Text>
      <Controller
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onChangeText={(value) => onChange(value)}
            value={value}
            onBlur={onBlur}
          />
        )}
        name="fullName"
        control={control}
        defaultValue=" "
      />
      {errors.fullName && (
        <Text style={styles.error}>Full Name is Required</Text>
      )}
      <Text style={styles.label}>Email</Text>
      <Controller
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            textContentType="emailAddress"
            onChangeText={(value) => onChange(value)}
            value={value}
            style={styles.input}
            onBlur={onBlur}
          />
        )}
        name="email"
        control={control}
        defaultValue=" "
      />
      {errors.email && <Text style={styles.error}>Email is required</Text>}
      <Text style={styles.label}>Age</Text>
      <Controller
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onChangeText={(value) => onChange(value)}
            value={value}
            onBlur={onBlur}
          />
        )}
        name="age"
        control={control}
        rules={{ required: true }}
        defaultValue=" "
      />
      {errors.age && (
        <Text style={styles.error}>
          Age is required And must be between 1-100
        </Text>
      )}
      <Text style={styles.label}>Password</Text>
      <Controller
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={{ flexDirection: "row" }}>
            <TextInput
              style={styles.input}
              onChangeText={(value) => onChange(value)}
              value={value}
              onBlur={onBlur}
              secureTextEntry={showPassword}
            />
            <TouchableOpacity
              onPress={() => setShowPassword((showPassword) => !showPassword)}
            >
              <Feather
                style={{ padding: 10, position: "absolute", right: 0 }}
                name={showPassword ? "eye-off" : "eye"}
                size={20}
              />
            </TouchableOpacity>
          </View>
        )}
        name={"password"}
        control={control}
        defaultValue={" "}
      />

      {errors.password && (
        <Text style={styles.error}>Password is required</Text>
      )}

      <Button
        title="Sign Up"
        onPress={() => {
          storeData(control).then(() => navigation.navigate("Welcome"));
        }}
      />
      <Button title=" Up" onPress={getMyObject} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: "50%",
    width: "80%",
    padding: 6,
    marginTop: 50,
    marginLeft: 40,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
  },
  input: {
    borderStyle: "solid",
    borderRadius: 4,
    borderColor: "#000",
    borderWidth: 1,
    paddingRight: 10,
    backgroundColor: "#fff",
    marginTop: 7,
    marginBottom: 10,
    width: "100%",
  },
  text: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#000",
    marginLeft: "38%",
  },
  error: {
    color: "red",
    fontWeight: "bold",
    marginBottom: 10,
  },
});
