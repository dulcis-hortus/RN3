import React from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";

const MapScreen = () => {
  const friends = [
    { name: "Abc", age: 20 },
    { name: "Bvd", age: 21 },
    { name: "Csd", age: 22 },
    { name: "Dfd", age: 23 },
    { name: "Eag", age: 24 },
  ];

  return (
    <View>
      <FlatList
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={({ item }) => {
          return (
            <Text style={styles.textStyle}>
              Name: {item.name} / Age: {item.age}
            </Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default MapScreen;
