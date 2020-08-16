import { StyleSheet, Button } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#8257E5",
    padding: 40,
  },
  content:{
      flex:1,
      justifyContent: "center"
  },
  title:{
    fontFamily: 'Archivo_700Bold',
    color: '#FFF',
    fontSize: 32,
    lineHeight: 37,
    maxWidth: 180
  },
  description:{
      marginTop: 24,
      color: '#d4c2ff',
      fontSize: 16,
      lineHeight: 26,
      fontFamily: 'Poppins_400Regular',
      maxWidth: 240
  },
  oKButton:{
    marginVertical: 20,
    height: 60,
    alignItems: "center",
    justifyContent : "center",
    backgroundColor: '#04d361',
    borderRadius: 15
  },
  oKbuttonText:{
    color: '#FFF',
    fontSize: 18,
    fontFamily: "Archivo_700Bold"
  },


})

export default styles