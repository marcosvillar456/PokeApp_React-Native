import React, { useState, useEffect } from "react";
import { colors, backgroundColors } from "../assets/colors";
import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";

export default function More(props) {
  const [Datos, SetDatos] = useState([]);
  useEffect(() => {
    if (props.route.params != undefined) {
      SetDatos(props.route.params.Pokemon);
    } else {
      SetDatos("Error");
    }
  }, [props.route.params]);

  console.log(Datos);
  return !Datos.name ? (
    <View
      style={{
        marginTop: "60%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={style.error}>Pls Search o select Pokemon</Text>
    </View>
  ) : (
    <ImageBackground
      resizeMode="contain"
      style={{
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: backgroundColors[Datos.types[0].name],
      }}
    >
      <View style={{ marginTop: 40, alignItems: "center" }}>
        <Image style={style.img} source={{ uri: `${Datos.img}` }}></Image>
        <View>
          <Text style={style.name}>{Datos.name}</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            {Datos.types?.map((type) => (
              <View
                key={type.name}
                style={{
                  backgroundColor: colors[type.name],
                  minWidth: 100,
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
          <View>
            <Text style={style.Atributes}>Force:{Datos.force}</Text>
            <Text style={style.Atributes}>Defending:{Datos.force}</Text>
            <Text style={style.Atributes}>Life:{Datos.force}</Text>
            <Text style={style.Atributes}>Speed:{Datos.force}</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
const style = StyleSheet.create({
  name: {
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
  },
  img: {
    width: 70,
    height: 70,
  },
  error: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
  },
  Atributes: { fontSize: 20 },
});
