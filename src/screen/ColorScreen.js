import React, { useState } from "react";
import { View, Button, FlatList } from "react-native";

const createRandomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${blue},${green})`;
};

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  return (
    <View>
      <Button
        title="Add a Color"
        onPress={() => {
          setColors([...colors, createRandomColor()]);
        }}
      />
      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => (
          <View style={{ width: 100, height: 100, backgroundColor: item }} />
        )}
      />
    </View>
  );
};

export default ColorScreen;
