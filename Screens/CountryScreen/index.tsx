import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import Styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import countryScreenBg from '../../Assets/CountryScreenBG.jpg';
import { COUNTRYSCREEN_BACK_BUTTON, COUNTRYSCREEN_HEADER_TEXT, COUNTRYSCREEN_IMAGE_BACKGROUND } from '../../Constants/Strings';
import Colors from '../../Constants/Colors';
import Typography from '../../Constants/Typography';

export const getCapitalDetails = async ({countryData}:any) =>
    await axios.get(`http://api.weatherstack.com/current?access_key=${ACCESS_KEY}&query=${countryData.capital[0]}`);
    
export const ACCESS_KEY = '17cffae7207518cb304022f1568d94e5';
const CountryScreen = ({navigation, route} : any) => {


    const countryData = route?.params?.countryData[0]

    

    const onWeatherButtonPress = async () => {
        const response = await getCapitalDetails({countryData});
        const capitalDetails = response.data
        navigation.navigate('CapitalWeather', {capitalDetails})
    }

  return (
    <ImageBackground source={countryScreenBg} style = { Styles.countryScreen} testID = {COUNTRYSCREEN_IMAGE_BACKGROUND}>
        <View style = {Styles.countryHeader}>
            <TouchableOpacity style = {Styles.backIconContainer} onPress = {() => navigation.goBack()} testID = {COUNTRYSCREEN_BACK_BUTTON}>
                <AntDesign name="left" size={Typography.fontSize.SIZE_24} color= {Colors.BLUE_1} />
            </TouchableOpacity>
            <Text style = {Styles.countryHeaderText} testID = {COUNTRYSCREEN_HEADER_TEXT}>
                {countryData?.name.common}
            </Text>
        </View>
        <View style = {Styles.flagContainer}>
            <Image
                style = {Styles.flagImage}
                source={{uri: countryData?.flags?.png}}
            />
            <Text style = {Styles.countryName}>
                {countryData?.name?.common}
            </Text>
        </View>
        <View style = {Styles.countryDetailsContainer}>
            <View style = {Styles.detailsSection}>
                <View style = {Styles.iconContainer}>
                    <FontAwesome5 name="place-of-worship" size={Typography.fontSize.SIZE_40} color={Colors.GREY_4} />
                </View>
                <View style = {Styles.detailsContainer}>
                    <Text style = {Styles.detailsTitle}>
                        Capital
                    </Text>
                    <Text style = {Styles.detailsDetail}>
                        {countryData?.capital}
                    </Text>
                </View>
            </View>
            <View style = {Styles.detailsSection}>
                <View style = {Styles.iconContainer}>
                    <MaterialIcons name="groups" size={Typography.fontSize.SIZE_40} color={Colors.GREY_4} />
                </View>
                <View style = {Styles.detailsContainer}>
                    <Text style = {Styles.detailsTitle}>
                        Population
                    </Text>
                    <Text style = {Styles.detailsDetail}>
                        {countryData?.population}
                    </Text>
                </View>
            </View>
            <View style = {Styles.detailsSection}>
                <View style = {Styles.iconContainer}>
                    <MaterialIcons name="place" size={Typography.fontSize.SIZE_40} color={Colors.GREY_4} />
                </View>
                <View style = {Styles.detailsContainer}>
                    <Text style = {Styles.detailsTitle}>
                        Position
                    </Text>
                    <Text style = {Styles.detailsDetail}>
                    {countryData?.latlng[0]}° N, {countryData?.latlng[1]}° E
                    </Text>
                </View>
            </View>
        </View>
        <View style = {Styles.weatherButtonContainer}>
            <TouchableOpacity style = {Styles.weatherButton} onPress = {onWeatherButtonPress}>
                <Text style = {Styles.weatherButtonText}>Capital Weather</Text>
            </TouchableOpacity>
        </View>
    </ImageBackground>
  )
}

export default CountryScreen;