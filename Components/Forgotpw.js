import React from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, TextInput, View, StyleSheet, Text } from "react-native";

const schema = yup.object().shape({
  email: yup.string().email().required(),
});
export default () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(schema),
  });
  const onsubmit = () => {
    alert("Verification Email Sent successfully ");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter your Email </Text>
      <Controller
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onChangeText={(value) => onChange(value)}
            onBlur={onBlur}
            value={value}
          />
        )}
        name="email"
        control={control}
        defaultValue=" "
      />
      {errors.email && (
        <Text style={styles.error}>Please enter valid email</Text>
      )}
      <Button title="Send Email" onPress={handleSubmit(onsubmit)} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: "50%",
    width: "80%",
    padding: 6,
    marginTop: 90,
    marginLeft: 40,
  },
  label: {
    color: "#000",
    fontWeight: "400",
    marginBottom: 10,
    fontSize: 14,
  },
  error: {
    color: "red",
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    borderRadius: 1,
    marginBottom: 20,
  },
});
