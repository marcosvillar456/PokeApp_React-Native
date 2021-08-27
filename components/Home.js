import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Input from "./input";
import Card from "./Card";
import commonStyles from "../Styles";
import axios from "axios";
export default function Home(props) {
  const [Pokemon, SetPokemon] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      const peticion = await axios.get(
        "https://api-pokemon-marcos.herokuapp.com/pokemons"
      );
      const datos = await peticion.data;
      return SetPokemon(datos);
    }
    fetchMyAPI();
  }, []);

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
            <Input props={props.navigation} />
          </View>
        </View>

        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={Pokemon}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{ alignItems: "center" }}
              onPress={() =>
                props.navigation.navigate("Pokemon", { Pokemon: item })
              }
            >
              <Card Pokemon={item} />
            </TouchableOpacity>
          )}
        />
      </ImageBackground>
    </View>
  );
}
