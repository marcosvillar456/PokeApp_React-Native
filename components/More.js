import React, { useState, useEffect } from "react";
import { colors } from "../assets/colors";
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
      }}
    >
      <View style={{ marginTop: 40, alignItems: "center" }}>
        <Image style={style.img} source={{ uri: `${Datos.img}` }}></Image>
      </View>
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

        <View style={{ width: "50%", alignSelf: "auto", marginTop: 30 }}>
          <Text style={{ textAlign: "center" }}>Force</Text>
          <View
            style={{
              marginBottom: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "100%",
                height: 10,
                backgroundColor: "#bbc0c4",
              }}
            />
            <View
              style={{
                marginBottom: 10,
                width: `${Datos.force}%`,
                height: 10,
                backgroundColor: colors[Datos.types[0].name],
                position: "absolute",
              }}
            />
          </View>

          <Text style={{ textAlign: "center" }}>Defending</Text>
          <View
            style={{
              marginBottom: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "100%",
                height: 10,
                backgroundColor: "#bbc0c4",
              }}
            />
            <View
              style={{
                width: `${Datos.defending}%`,
                height: 10,
                backgroundColor: colors[Datos.types[0].name],
                position: "absolute",
              }}
            />
          </View>

          <Text style={{ textAlign: "center" }}>Life</Text>
          <View
            style={{
              marginBottom: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "100%",
                height: 10,
                backgroundColor: "#bbc0c4",
              }}
            />
            <View
              style={{
                marginBottom: 10,
                width: `${Datos.life}%`,
                height: 10,
                backgroundColor: colors[Datos.types[0].name],
                position: "absolute",
              }}
            />
          </View>

          <Text style={{ textAlign: "center" }}>Speed</Text>
          <View
            style={{
              marginBottom: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "100%",
                height: 10,
                backgroundColor: "#bbc0c4",
              }}
            />
            <View
              style={{
                marginBottom: 10,
                width: `${Datos.speed}%`,
                height: 10,
                backgroundColor: colors[Datos.types[0].name],
                position: "absolute",
              }}
            />
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
