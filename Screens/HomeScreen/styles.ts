import { StyleSheet, Dimensions  } from "react-native";

const Styles = StyleSheet.create({
    homeScreen:{
        width: '100%',
        height: Dimensions.get('window').height,
        backgroundColor: '#ffffff',
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
        padding: 15,
        display: 'flex',
        alignItems :'center',
        // backgroundColor: '#26abff',
    },
    homeHeaderText:{
        fontSize: 25,
        fontWeight: '500',
        color: '#26abff',
        letterSpacing: 2,
    },
    homeScreenForm:{
        width: '80%',
        height: 'auto',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        padding: 25,
        borderWidth: 1.5,
        borderColor: '#26abff',
        borderRadius: 10,
        marginTop: '45%',
        backgroundColor: 'rgba(255,255,255,0.1)',
    },
    inputFormText:{
        fontSize: 20,
        fontWeight: '500',
        color: '#26abff',
        textDecorationStyle: 'solid',
        textDecorationLine: 'underline',
    },
    textInput:{
        fontSize: 15,
        color: '#009dff',
        borderBottomColor: '#009dff',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        width: '100%',
        marginTop: 25,
        
    },
    submitButtonContainer:{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
    },
    submitButton: {
        width: '50%',
        height: 'auto',
        padding: 10,
        fontSize: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '600',
        borderRadius: 5,
        textAlign: 'center',
        letterSpacing: 1,
    }
});

export default Styles;