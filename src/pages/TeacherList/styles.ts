import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f7",
  },

  teacherList: {
    marginTop: -40,
  },

  searchForm: {
    marginBottom: 5,
  },

  label: {
    color: "#d4c2ff",
    fontFamily: "Poppins_400Regular",
  },

  inputGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  inputBlock: {
    width: "48%",
  },

  input: {
    height: 45,
    backgroundColor: "#FFF",
    borderRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 14,
    marginTop: 4,
    marginBottom: 10,
  },

  submitButton: {
    backgroundColor: "#04d311",
    width: '100%',
    height: 50,
    borderRadius: 9,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
    marginBottom: 15
  },

  submitButtonText: {color: '#FFF',
  fontFamily: 'Archivo_700Bold',
  fontSize: 16,
  marginLeft: 15},
});

export default styles;
