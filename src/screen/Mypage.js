import React from "react";
import { View } from "react-native";
import ImageDetails from "../components/ImageDetails";

const dataSet = [
  {
    title: "Beach",
    image: "../../assets/beach.jpg",
  },
  {
    title: "Forest",
    image: "../../assets/forest.jpg",
  },
  {
    title: "Mountain",
    image: "../../assets/mountain.jpg",
  },
];

const Mypage = () => {
  return (
    <View>
      {/* {dataSet.map((data) => ( */}
      <ImageDetails title="Beach" image="../../assets/beach.jpg" />
      {/* ))} */}
    </View>
  );
};

export default Mypage;
