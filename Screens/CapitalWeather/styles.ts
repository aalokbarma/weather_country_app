import { StyleSheet, Dimensions  } from "react-native";
import Colors from "../../Constants/Colors";
import Typography from "../../Constants/Typography";

const Styles = StyleSheet.create({
    capitalWeather:{
        width: '100%',
        height: Dimensions.get('window').height,
        backgroundColor: Colors.WHITE,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    capitalHeader:{
        width: '100%',
        padding: Typography.spacing.SPACING_15,
        backgroundColor: Colors.BLUE_1,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
    },
    backIconContainer:{
        paddingRight: Typography.spacing.SPACING_10,
        borderRightColor: '#ffffff',
        borderRightWidth: 1.5,
        marginRight: Typography.spacing.SPACING_10,
    },
    capitalHeaderText:{
        fontSize: Typography.fontSize.SIZE_25,
        fontWeight: '800',
        color: '#ffffff',
        letterSpacing: Typography.spacing.SPACING_2,
        textTransform: 'uppercase',
    },
    mainWeatherContainer:{
        width: '90%',
        height: '45%',
        borderRadius: Typography.spacing.SPACING_10,
        backgroundColor: Colors.BLACK_0_4,
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
        fontSize: Typography.fontSize.SIZE_50,
        color: Colors.WHITE,
        fontWeight: '300',
    },
    temperatureUnit:{
        fontSize: Typography.fontSize.SIZE_15,
        color: Colors.WHITE,
    },
    weatherContainer:{
        width : '50%',
        height: 'auto',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    weatherIcon:{
        width: Typography.spacing.SPACING_50,
        height: Typography.spacing.SPACING_50,
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
        marginVertical: Typography.spacing.SPACING_25,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    windSpeed:{
        fontSize: Typography.fontSize.SIZE_50,
        fontWeight: '500',
        color: Colors.WHITE,
        letterSpacing: Typography.spacing.SPACING_1,
    },
    speedUnit:{
        fontSize: Typography.fontSize.SIZE_25
    },
    precipetation:{
        fontSize: Typography.fontSize.SIZE_50,
        fontWeight: '500',
        color: Colors.WHITE,
        letterSpacing: Typography.spacing.SPACING_1,
    },
    precipetationUnit:{
        fontSize: Typography.fontSize.SIZE_25
    },
    precipitationContainer:{
        width: '50%',
        height: 'auto',
        marginVertical: Typography.spacing.SPACING_25,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default Styles;