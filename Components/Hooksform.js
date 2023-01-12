import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, Text, TextInput, View, StyleSheet } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});
export default () => {
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  const onsubmit = (data) => {
    alert(data.userName + " " + data.password);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>User Name</Text>
      <Controller
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onChangeText={(value) => onChange(value)}
            style={styles.input}
            value={value}
            onBlur={onBlur}
          />
        )}
        name="userName"
        control={control}
        rules={{ required: true }}
        defaultValue=" "
      />
      {errors.userName && (
        <Text style={styles.error}>User Name iS Required</Text>
      )}
      <Text style={styles.label}>PassWord</Text>
      <Controller
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onChangeText={(value) => onChange(value)}
            value={value}
            style={styles.input}
            onBlur={onBlur}
            textContentType="password"
          />
        )}
        name="password"
        rules={{ required: true }}
        defaultValue=" "
        control={control}
      />
      {errors.password && (
        <Text style={styles.error}>Password is required</Text>
      )}
      <Button title="Submit" onPress={handleSubmit(onsubmit)} />
      <Button
        title="Reset"
        onPress={() => {
          reset({ userName: " ", password: "" });
        }}
        color="red"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: "center",
    padding: 8,
    height: "100%",
    width: "100%",
    backgroundColor: "#000",
  },
  label: {
    fontSize: 14,
    fontWeight: "300",
    color: "#fff",
  },
  input: {
    borderStyle: "solid",
    borderRadius: 10,
    borderColor: "#000",
    borderWidth: 2,
    backgroundColor: "#fff",
  },
  error: {
    color: "red",
    fontWeight: "bold",
  },
});
