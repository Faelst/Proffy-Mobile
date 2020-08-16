import { StyleSheet, Button } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#8257E5",
    padding: 40,
  },

  logoImage: {
    width: "100%",
    height: 20,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "contain",
    marginVertical: 20
  },

  banner: {
    width: "100%",
    resizeMode: "contain",
  },

  title: {
    fontFamily: "Poppins_400Regular",
    color: "#FFF",
    fontSize: 20,
    lineHeight: 30,
    marginTop: 80,
  },

  titleBold: {
    fontFamily: "Poppins_600SemiBold",
  },

  buttonsContainer: {
    flexDirection: "row",
    marginTop: 40,
    justifyContent: "space-between",
  },

  button: {
    backgroundColor: "#300",
    height: 150,
    width: "46%",
    padding: 24,
    borderRadius: 15,
    justifyContent: "space-between",
  },

  buttonPrimary: {
    backgroundColor: "#9871f5",
  },
  buttonSecondary: {
    backgroundColor: "#04d361",
  },

  buttonText: {
    fontFamily: "Archivo_700Bold",
    color: "#FFF",
    fontSize: 25,
  },

  totalConnections: {
    fontFamily: "Archivo_400Regular",
    color: "#d4c2ff",
    fontSize: 12,
    lineHeight: 20,
    maxWidth: 140,
    marginTop: 40,
  },
});

export default style;
