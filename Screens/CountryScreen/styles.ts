import { StyleSheet, Dimensions  } from "react-native";
import Colors from "../../Constants/Colors";
import Typography from "../../Constants/Typography";

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
        padding: Typography.spacing.SPACING_15,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row'
    },
    countryHeaderText:{
        fontSize: Typography.fontSize.SIZE_25,
        fontWeight: '800',
        color: Colors.BLUE_1,
        letterSpacing: Typography.spacing.SPACING_2,
        textTransform: 'uppercase',
    },
    flagContainer:{
        width: '100%',
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: Typography.spacing.SPACING_25,
    },
    countryName:{
        fontSize: Typography.fontSize.SIZE_25,
        color: Colors.WHITE,
        fontWeight: '600',
    },
    countryDetailsContainer:{
        width: '100%',
        height: 'auto',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        padding: Typography.spacing.SPACING_25,
        backgroundColor: Colors.WHITE,
    },
    detailsSection:{
        width: '90%',
        padding: Typography.spacing.SPACING_15,
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
        fontSize: Typography.fontSize.SIZE_18,
        fontWeight: '800',
        letterSpacing: Typography.spacing.SPACING_1,
        color: Colors.GREY_4,
    },
    detailsDetail:{
        fontSize: Typography.fontSize.SIZE_16,
        fontWeight: '500',
        letterSpacing: Typography.spacing.SPACING_1,
        color: Colors.GREY_7,
    },
    backIconContainer:{
        paddingRight: Typography.spacing.SPACING_10,
        borderRightColor: Colors.BLUE_1,
        borderRightWidth: 1.5,
        marginRight: Typography.spacing.SPACING_10,
    },
    flagImageContainer:{
        width: '100%',
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    flagImage:{
        width: Typography.spacing.SPACING_200,
        height: Typography.spacing.SPACING_150,
        resizeMode: 'contain',
    },
    weatherButtonContainer:{
        width: '100%',
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Typography.spacing.SPACING_25,
    },
    weatherButton:{
        width: '70%',
        height: 'auto',
        padding: Typography.spacing.SPACING_10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: Colors.BLUE_2,
        borderRadius: Typography.spacing.SPACING_5,
    },
    weatherButtonText:{
        fontSize: Typography.fontSize.SIZE_15,
        fontWeight: '600',
        letterSpacing: Typography.spacing.SPACING_1,
        color: Colors.WHITE
    },
});

export default Styles;