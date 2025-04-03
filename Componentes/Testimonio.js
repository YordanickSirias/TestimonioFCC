import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Testimonio = ({ nombre, pais, cargo, empresa, foto, testimonio }) => {
  return (
    <View style={styles.contenedor}>
      <View style={styles.imagencontenedor}>
        <Image source={foto} style={styles.imagen} />
      </View>
      <View style={styles.contenido}>
        <Text style={styles.nombre}>
          {nombre} en {pais}
        </Text>
        <Text style={styles.cargo}>
          {cargo} en {empresa}
        </Text>
        <Text style={styles.testimonio}>"{testimonio}"</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    flexDirection: "row",
    minHeight: 200,
    backgroundColor: "#f5f5f5",
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24,
  },

  imagencontenedor: {
    flex: 1,
    alignSelf: "center",
  },

  imagen: {
    height: 150,
    width: "90%",
    alignSelf: "center",
  },
  contenido: {
    flex: 2,
    alignSelf: "center",
  },
  nombre: {
    fontWeight: "bold",
    fontSize: 16,
    alignSelf: "center",
  },
  cargo: {
    fontStyle: "italic",
    marginVertical: 5,
    alignSelf: "center",
  },
  testimonio: {
    fontSize: 14,
    alignSelf: "center",
    justifyContent:"center",
  },
});

export default Testimonio;
