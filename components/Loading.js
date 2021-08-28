import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";

export default function Loading() {
  return (
    <ImageBackground
      resizeMode="contain"
      style={{
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Image
        style={{
          width: 150,
          height: 150,
          resizeMode: "contain",
          marginTop: "50%",
        }}
        source={{
          uri: "https://i.pinimg.com/originals/9f/b1/25/9fb125f1fedc8cc62ab5b20699ebd87d.gif",
        }}
      />
      <Text>Loading...</Text>
    </ImageBackground>
  );
}
