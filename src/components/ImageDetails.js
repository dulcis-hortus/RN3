import React from "react";
import { Text, View, Image } from "react-native";

const ImageDetails = ({ image, title }) => {
  return (
    <View>
      {/* <Image source={require(image)} /> */}
      <Text>{title}</Text>;
    </View>
  );
};

export default ImageDetails;
