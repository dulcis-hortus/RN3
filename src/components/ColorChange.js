import React from "react";
import { Button, View, Text } from "react-native";


const ColorCounter = ({ color }) => {
    return (
      <View>
        <Text>{color}</Text>
        <Button title={`more ${color}`} onPress={}/>
        <Button title={`less ${color}`} onPress={}/>
      </View>
    );
  };


  export default ColorCounter