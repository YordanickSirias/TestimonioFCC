import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import Testimonio from "./Componentes/Testimonio";

const App = () => {
  return (
    <View style={styles.contenedor}>
      <View style={styles.contenedorLogo}>
        <Image
          style={styles.logo}
          source={require("./assets/ImagenesFCC/Logo.png")}
        ></Image>
      </View>

      <Text style={styles.titulo}>
        Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp:
      </Text>

      <ScrollView style={styles.scroll}>
        <Testimonio
          nombre="Shawn Wang"
          pais="Singapur"
          cargo="Ingeniero de Software"
          empresa="Amazon"
          foto={require("./assets/ImagenesFCC/shawn.png")}
          testimonio="Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software."
        />

        <Testimonio
          nombre="Sarah Chima"
          pais="Nigeria"
          cargo="Ingeniera de Software"
          empresa="ChatDesk"
          foto={require("./assets/ImagenesFCC/sarah.png")}
          testimonio="FreeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro."
        />

        <Testimonio
          nombre="Emma Bostian"
          pais="Suecia"
          cargo="Ingeniera de Software"
          empresa="Spotify"
          foto={require("./assets/ImagenesFCC/emma.png")}
          testimonio="Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript."
        />

<Testimonio
          nombre="Emma Bostian"
          pais="Suecia"
          cargo="Ingeniera de Software"
          empresa="Spotify"
          foto={require("./assets/ImagenesFCC/emma.png")}
          testimonio="Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript."
        />

<Testimonio
          nombre="Shawn Wang"
          pais="Singapur"
          cargo="Ingeniero de Software"
          empresa="Amazon"
          foto={require("./assets/ImagenesFCC/shawn.png")}
          testimonio="Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software."
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: "#f5f5f5",

  },

  contenedorLogo: {
    backgroundColor: "#1b1b32",
    height: 100,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: 50,
    width: "100%",

  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  scroll: {
    width: "100%",
  },
});

export default App;
