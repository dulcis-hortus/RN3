import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";

const TextScreen = () => {
  const [password, setPassword] = useState("");

  return (
    <View>
      <Text>Enter name:</Text>
      <TextInput
        style={styles.input}
        autoCorrect={false}
        value={password}
        autoCapitalize="none"
        onChangeText={(newValue) => setPassword(newValue)}
      />
      <Text>My name is {password}</Text>
      {password.length < 5 ? <Text>Password must be characters</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
