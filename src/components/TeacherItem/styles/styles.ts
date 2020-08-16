import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#e6e6F0',
        borderRadius: 20,
        overflow: 'hidden',
        marginBottom: 10,
        
    },

    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 24,
    },

    avatar:{
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#eee'
    },

    profileInfo:{
        marginLeft:16
    },

    name: {
        fontFamily: 'Archivo_700Bold',
        color:'#32264d',
        fontSize: 18
    },

    subject:{
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        color: '#6a6180',
        marginTop: 2
    },
    bio:{
        marginHorizontal: 24,
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        lineHeight: 26,
        color: '#6a6180'
    },

    footer:{
        backgroundColor: '#fafafc',
        padding:24,
        alignItems: 'center',
        marginTop: 24
    },

    price:{
        fontFamily: 'Poppins_400Regular',
        color: '#6a6180',
        fontSize: 14
    },

    priceValue:{
        fontFamily: 'Archivo_700Bold',
        color: '#8257e5',
        fontSize: 16
    },

    buttonsContainer:{
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    favoriteButton:{
        backgroundColor: '#8257e5',
        width : 56,
        height: 56,
        borderRadius: 9,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },

    contactButton: {
        backgroundColor: '#04d311',
        flex: 1,
        height: 56,
        borderRadius: 9,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    },

    containerButtonText:{
        color: '#FFF',
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
        marginLeft: 15
    },

    favorited:{
        backgroundColor:'#e33d3d'
    }


})

export default styles;