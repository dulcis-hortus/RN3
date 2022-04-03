import React, { useState } from "react";
import { Button, View, Text } from "react-native";

const ColorChange = () => {
  const [red, setRed] = useState(Math.floor(Math.random() * 256));
  const [green, setGreen] = useState(Math.floor(Math.random() * 256));
  const [blue, setBlue] = useState(Math.floor(Math.random() * 256));

  return (
    <View>
      <Text>RED</Text>
      <Button
        title="more red"
        onPress={() => {
          setRed(red + 20);
        }}
      />
      <Button
        title="less red"
        onPress={() => {
          setRed(red - 20);
        }}
      />
      <Text>GREEN</Text>
      <Button
        title="more green"
        onPress={() => {
          setGreen(green + 20);
        }}
      />
      <Button
        title="less green"
        onPress={() => {
          setGreen(green - 20);
        }}
      />
      <Text>BLUE</Text>
      <Button
        title="more blue"
        onPress={() => {
          setBlue(blue + 20);
        }}
      />
      <Button
        title="less blue"
        onPress={() => {
          setBlue(blue - 20);
        }}
      />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

export default ColorChange;
