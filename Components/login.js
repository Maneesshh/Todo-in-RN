import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Feather from "react-native-vector-icons/Feather";

const schema = yup.object().shape({
  phone: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});
export default ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(true);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phone: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  const onsubmit = (data) => {
    navigation.navigate("Welcome", data);
    // alert(data.phone + " " + data.password);
  };
  const createAcc = () => {
    navigation.navigate("SignUp");
    // navigation.push("SignUp");
  };
  const forgotPw = () => {
    navigation.navigate("ForgotPw");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Phone or Email</Text>
      <Controller
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onChangeText={(value) => onChange(value)}
            value={value}
            onBlur={onBlur}
            style={styles.input}
          />
        )}
        name="phone"
        control={control}
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.phone && (
        <Text style={styles.error}>Email or Phone required</Text>
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
        name="password"
        control={control}
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.password && (
        <Text style={styles.error}>
          Minimum 8 character Password is required
        </Text>
      )}
      <Button title="Sign In" onPress={handleSubmit(onsubmit)} />
      <Text onPress={forgotPw} style={styles.text2}>
        Forgot Password ?
      </Text>
      <View style={{ marginVertical: 10 }}>
        <Button title="Create new account " onPress={createAcc} />
      </View>
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
    flex: 3,
  },
  text2: {
    marginLeft: "35%",
    marginTop: 10,
    fontWeight: "bold",
  },
  label: {
    color: "#000",
    fontWeight: "400",
    marginBottom: 10,
    fontSize: 14,
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
  },
});
