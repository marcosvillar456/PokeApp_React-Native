import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import axios from "axios";
import Input from "./components/input";
import Card from "./components/Card";
import commonStyles from "./Styles";

export default function App() {
  const [Pokemon, SetPokemon] = useState([]);

  // useEffect(() => {
  //   async function fetchMyAPI() {
  //     const peticion = await axios.get(
  //       "https://api-pokemon-marcos.herokuapp.com/pokemons"
  //     );
  //     const datos = await peticion.data;
  //     return SetPokemons(datos);
  //   }
  //   fetchMyAPI();
  // }, []);

  return (
    <View>
      <ImageBackground
        resizeMode="contain"
        style={{ marginTop: 40, width: "100%", height: "100%" }}
      >
        <View style={commonStyles.container}>
          <Text style={commonStyles.heading}> PokeApp</Text>
          <Text>
            Search for pokemon by name or usifn the National Pokedex number
          </Text>
          <View style={{ marginVertical: 10 }}>
            <Input estado={Pokemon} SetPokemon={SetPokemon} />
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <Card Pokemon={Pokemon} />
        </View>
      </ImageBackground>
    </View>
  );
}
