import React from 'react'
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        padding: 25,
        backgroundColor: '#8257e5',
        paddingBottom: 40
    },
    topBar:{
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title:{
        fontFamily:'Archivo_700Bold',
        color: '#FFF',
        fontSize: 24,
        lineHeight: 32,
        maxWidth: 160,
        marginVertical : 15
    },

    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        paddingRight: 5
    }

})

export default styles