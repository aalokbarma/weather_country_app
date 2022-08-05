import { StyleSheet, Dimensions  } from "react-native";

const Styles = StyleSheet.create({
    capitalWeather:{
        width: '100%',
        height: Dimensions.get('window').height,
        backgroundColor: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    capitalHeader:{
        width: '100%',
        padding: 15,
        backgroundColor: '#26abff',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
    },
    backIconContainer:{
        paddingRight: 10,
        borderRightColor: '#ffffff',
        borderRightWidth: 1.5,
        marginRight: 10,
    },
    capitalHeaderText:{
        fontSize: 25,
        fontWeight: '800',
        color: '#ffffff',
        letterSpacing: 2,
        textTransform: 'uppercase',
    },
    mainWeatherContainer:{
        width: '90%',
        height: '45%',
        borderRadius: 10,
        backgroundColor: 'rgba(0,0,0,0.4)',
        marginTop: "40%",
        display: 'flex',
        justifyContent: 'center',
    },
    topRowContainer:{
        width: '100%',
        height: 'auto',
        display : 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    temperatureContainer:{
        width: '50%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginVertical: 25,
        justifyContent: 'flex-end',
    },
    temperatureValue:{
        fontSize: 50,
        color: '#ffffff',
        fontWeight: '300',
    },
    temperatureUnit:{
        fontSize: 15,
        color: '#ffffff',
    },
    weatherContainer:{
        width : '50%',
        height: 'auto',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    weatherIcon:{
        width: 50,
        height: 50,
        resizeMode: 'contain',
        marginLeft: '10%'
    },
    detailsContainer:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    windSpeedContainer:{
        width: '50%',
        height: 'auto',
        marginVertical: 25,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    windSpeed:{
        fontSize: 50,
        fontWeight: '500',
        color: '#ffffff',
        letterSpacing: 1,
    },
    speedUnit:{
        fontSize: 25
    },
    precipetation:{
        fontSize: 50,
        fontWeight: '500',
        color: '#ffffff',
        letterSpacing: 1,
    },
    precipetationUnit:{
        fontSize: 25
    },
    precipitationContainer:{
        width: '50%',
        height: 'auto',
        marginVertical: 25,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default Styles;