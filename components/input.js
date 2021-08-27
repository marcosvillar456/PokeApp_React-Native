import React, { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";

import axios from "axios";
function Input({ props }) {
  const [Search, SetSearch] = useState("");

  async function submit() {
    const peticion =
      await axios.get(`https://api-pokemon-marcos.herokuapp.com/pokemons?name=${Search}
    `);
    const data = await peticion.data;
    props.navigate("Pokemon", { Pokemon: data });
  }
  return (
    <View style={styles.input}>
      <TextInput
        placeholder="Search your Pokemon"
        type="text"
        onChangeText={(e) => SetSearch(e)}
        onSubmitEditing={() => submit()}
      />
    </View>
  );
}
export default Input;

const styles = StyleSheet.create({
  input: {
    padding: 10,
    backgroundColor: "#22252d54",
    borderRadius: 10,
  },
});
