import { StyleSheet, Dimensions  } from "react-native";

const Styles = StyleSheet.create({
    countryScreen:{
        width: '100%',
        height: Dimensions.get('window').height,
        display: "flex",
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    countryHeader:{
        width: '100%',
        padding: 15,
        // backgroundColor: '#26abff',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row'
    },
    countryHeaderText:{
        fontSize: 25,
        fontWeight: '800',
        color: '#26abff',
        letterSpacing: 2,
        textTransform: 'uppercase',
    },
    flagContainer:{
        width: '100%',
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 25,
    },
    countryName:{
        fontSize: 25,
        color: '#ffffff',
        fontWeight: '600',
    },
    countryDetailsContainer:{
        width: '100%',
        height: 'auto',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        padding: 25,
        backgroundColor: '#ffffff',
    },
    detailsSection:{
        width: '90%',
        padding: 15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    iconContainer:{
        width: '30%',
    },
    detailsContainer:{
        width: '70%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    detailsTitle:{
        fontSize: 18,
        fontWeight: '800',
        letterSpacing: 1,
        color: '#444',
    },
    detailsDetail:{
        fontSize: 16,
        fontWeight: '500',
        letterSpacing: 1,
        color: '#777',
    },
    backIconContainer:{
        paddingRight: 10,
        borderRightColor: '#26abff',
        borderRightWidth: 1.5,
        marginRight: 10,
    },
    flagImageContainer:{
        width: '100%',
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    flagImage:{
        width: 200,
        height: 150,
        resizeMode: 'contain',
    },
    weatherButtonContainer:{
        width: '100%',
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
    },
    weatherButton:{
        width: '70%',
        height: 'auto',
        padding: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: '#009dff',
        borderRadius: 5,
    },
    weatherButtonText:{
        fontSize: 15,
        fontWeight: '600',
        letterSpacing: 1,
        color: '#ffffff'
    },
});

export default Styles;