import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard, ImageBackground } from 'react-native';

import React, {useState, useEffect} from 'react';
import Styles from './styles';
import axios from 'axios';
import homeScreenBg from '../../Assets/HomeScreenBG.jpg';
import { HOMESCREEN_KEYBOARD_AVOIDING_VIEW, HOME_SCREEN_SUBMIT_BUTTON } from '../../Constants/Strings';
import Colors from '../../Constants/Colors';

export const getCountry = async (country :any) =>
    await axios.get(`https://restcountries.com/v3.1/name/${country}`);

const HomeScreen = ({navigation} :any) => {

    const [country, setCountry] = useState('');
    const [buttonColor, setButtonColor] = useState(Colors.DISABLED_BUTTON);

    
    useEffect(() => {
        if(country != undefined && country != '') {
            setButtonColor(Colors.BLUE_2)
        } else {
            setButtonColor(Colors.DISABLED_BUTTON)
        }
    }, [country])

    const onSubmit = async () => {
        if(buttonColor == Colors.BLUE_2) {
            const response = await getCountry(country)
            const countryData = response.data
            navigation.navigate("Country", {countryData})
            setCountry('')
        } else{
            return
        }
    }


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={Styles.homeScreen}
      testID = {HOMESCREEN_KEYBOARD_AVOIDING_VIEW}
    >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style = {Styles.touchableWithoutFeedback}>
            <ImageBackground source={homeScreenBg} style ={Styles.mainContainer}>
                    <View style = {Styles.homeHeader}>
                        <Text style = {Styles.homeHeaderText}>Weather App</Text>
                    </View>
                <View style = {Styles.homeScreenForm}>
                        <Text style = {Styles.inputFormText}>Country Input Form :</Text>
                        <TextInput 
                            style = {Styles.textInput}
                            keyboardType = 'default'
                            placeholder='Enter Country'
                            value={country}
                            onChangeText = {setCountry}
                            placeholderTextColor = {Colors.PLACEHOLDER}
                        />
                        <TouchableOpacity style = {Styles.submitButtonContainer} onPress = {onSubmit} testID = {HOME_SCREEN_SUBMIT_BUTTON}>
                            <Text style = {[Styles.submitButton,{backgroundColor: buttonColor, color: Colors.WHITE}]}>Submit</Text>
                        </TouchableOpacity>
                </View>
            </ImageBackground>
        </TouchableWithoutFeedback>

    </KeyboardAvoidingView>
  )
}

export default HomeScreen;