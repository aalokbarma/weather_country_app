import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard, ImageBackground } from 'react-native';

import React, {useState, useEffect} from 'react';
import Styles from './styles';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import homeScreenBg from '../../Assets/HomeScreenBG.jpg';
import { RootStackParamList } from '../../types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const HomeScreen = () => {

    const [country, setCountry] = useState('');
    const [buttonColor, setButtonColor] = useState('#949494');

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

        const getCountry = async () =>
            await axios.get(`https://restcountries.com/v3.1/name/${country}`);
        
    
    useEffect(() => {
        if(country != undefined && country != '') {
            setButtonColor('#009dff')
        } else {
            setButtonColor('#949494')
        }
    }, [country])

    const onSubmit = async () => {
        if(buttonColor == '#009dff') {
            const response = await getCountry()
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
      testID = 'HomeScreenKeyboardAvoidingView'
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
                            placeholderTextColor = {'#0da2ff'}
                        />
                        <TouchableOpacity style = {Styles.submitButtonContainer} onPress = {onSubmit}>
                            <Text style = {[Styles.submitButton,{backgroundColor: buttonColor, color: '#ffffff'}]}>Submit</Text>
                        </TouchableOpacity>
                </View>
            </ImageBackground>
        </TouchableWithoutFeedback>

    </KeyboardAvoidingView>
  )
}

export default HomeScreen;