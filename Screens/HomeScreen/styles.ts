import { StyleSheet, Dimensions  } from "react-native";
import Colors from "../../Constants/Colors";
import Typography from "../../Constants/Typography";

const Styles = StyleSheet.create({
    homeScreen:{
        width: '100%',
        height: Dimensions.get('window').height,
        backgroundColor: Colors.WHITE,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    touchableWithoutFeedback:{
        width: '100%',
        height: '100%'
    },
    mainContainer:{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        height: Dimensions.get('window').height,
    },
    homeHeader:{
        width: '100%',
        padding: Typography.spacing.SPACING_15,
        display: 'flex',
        alignItems :'center',
    },
    homeHeaderText:{
        fontSize: Typography.fontSize.SIZE_25,
        fontWeight: '500',
        color: Colors.BLUE_1,
        letterSpacing: Typography.spacing.SPACING_2,
    },
    homeScreenForm:{
        width: '80%',
        height: 'auto',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        padding: Typography.spacing.SPACING_25,
        borderWidth: 1.5,
        borderColor: Colors.BLUE_1,
        borderRadius: Typography.spacing.SPACING_10,
        marginTop: '45%',
        backgroundColor: Colors.WHITE_0_1,
    },
    inputFormText:{
        fontSize: Typography.fontSize.SIZE_20,
        fontWeight: '500',
        color: Colors.BLUE_1,
        textDecorationStyle: 'solid',
        textDecorationLine: 'underline',
    },
    textInput:{
        fontSize: Typography.fontSize.SIZE_15,
        color: Colors.BLUE_2,
        borderBottomColor: Colors.BLUE_2,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        width: '100%',
        marginTop: Typography.spacing.SPACING_25,
        
    },
    submitButtonContainer:{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Typography.spacing.SPACING_25,
    },
    submitButton: {
        width: '50%',
        height: 'auto',
        padding: Typography.spacing.SPACING_10,
        fontSize: Typography.fontSize.SIZE_15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '600',
        borderRadius: Typography.spacing.SPACING_5,
        textAlign: 'center',
        letterSpacing: Typography.spacing.SPACING_1,
    }
});

export default Styles;