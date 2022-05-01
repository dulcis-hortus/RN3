import React, { useState } from "react";
import { Button, View, Text } from "react-native";


const ColorChange = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
    <View>
      <Text>RED</Text>
      <Button
        title="more red"
        onPress={() => {
          handlePlusColor(red, setRed);
        }}
      />
      <Button
        title="less red"
        onPress={() => {
          handleSubColor((red, setRed));
        }}
      />
      <Text>GREEN</Text>
      <Button
        title="more green"
        onPress={() => {
          handlePlusColor(green, setGreen);
        }}
      />
      <Button
        title="less green"
        onPress={() => {
          handleSubColor(green, setGreen);
        }}
      />
      <Text>BLUE</Text>
      <Button
        title="more blue"
        onPress={() => {
          handlePlusColor(blue, setBlue);
        }}
      />
      <Button
        title="less blue"
        onPress={() => {
          handleSubColor(blue, setBlue);
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
