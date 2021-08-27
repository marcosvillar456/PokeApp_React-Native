import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { colors, backgroundColors } from "../assets/colors";
function Card({ Pokemon }) {
  if (Pokemon === "error") {
    return (
      <View>
        <Text>Pokemon not found</Text>
      </View>
    );
  } else {
    return !Pokemon.name ? (
      <View>
        <Text>Search Pokemons pls</Text>
      </View>
    ) : (
      <View
        style={{
          ...style.card,
          backgroundColor: backgroundColors[Pokemon.types[0].name],
        }}
      >
        <View>
          <Text>{Pokemon.id}</Text>
          <Text style={style.name}>{Pokemon.name}</Text>
          <View style={{ flexDirection: "row" }}>
            {Pokemon.types?.map((type) => (
              <View
                key={type.name}
                style={{
                  backgroundColor: colors[type.name],
                  minWidth: 50,
                  alignItems: "center",
                  margin: 5,
                  padding: 5,
                  borderRadius: 10,
                }}
              >
                <Text>{type.name}</Text>
              </View>
            ))}
          </View>
        </View>
        <Image style={style.img} source={{ uri: `${Pokemon.img}` }}></Image>
      </View>
    );
  }
}
export default Card;
const style = StyleSheet.create({
  card: {
    flexDirection: "row",
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "green",
    width: "90%",
  },
  name: {
    fontSize: 26,
    fontWeight: "700",
  },
  img: {
    width: 100,
    height: 100,
    position: "absolute",
    right: 0,
  },
});
