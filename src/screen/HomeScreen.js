import React from "react";
import { Text, StyleSheet, TouchableOpacity, View, Button } from "react-native";
const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>It's so COOL..!!</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text>If you want to go to Home, PUSH ME!</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Calendar");
        }}
      >
        <Text>If you want to go to Calendar, PUSH ME!</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Mypage");
        }}
      >
        <Text>If you want to go to Mypage, PUSH ME!</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Map");
        }}
      >
        <Text>If you want to go to Map, PUSH ME!</Text>
      </TouchableOpacity>
      <Button
        title="If you want to CREATE color, PUSH ME!"
        onPress={() => {
          navigation.navigate("Color");
        }}
      />
      <Button
        title="If you want to CHANGE color, PUSH ME!"
        onPress={() => {
          navigation.navigate("ColorChange");
        }}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Text");
        }}
      >
        <Text>If you want to Text, PUSH ME!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
