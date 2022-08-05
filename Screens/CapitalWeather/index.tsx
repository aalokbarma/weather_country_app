import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import Styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import capitalScreenBg from '../../Assets/CapitalScreenBG.jpg';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';

const CapitalWeather = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const route = useRoute();
    const response:any = route.params;
    const capitalDetails:any = response.capitalDetails;

  return (
    <ImageBackground source={capitalScreenBg} style = {Styles.capitalWeather}>
        <View style = {Styles.capitalHeader}>
            <TouchableOpacity style = {Styles.backIconContainer} onPress = {() => navigation.goBack()}>
                <AntDesign name="left" size={24} color="#ffffff" />
            </TouchableOpacity>
            <Text style = {Styles.capitalHeaderText}>
                {capitalDetails?.location?.name}
            </Text>
        </View>
        <View style = {Styles.mainWeatherContainer}>
            <View style = {Styles.topRowContainer}>
                <View style = {Styles.temperatureContainer}>
                    <Text style = {Styles.temperatureValue}>
                        {capitalDetails?.current?.temperature}
                    </Text>
                    <Text style = {Styles.temperatureUnit}>
                        °C
                    </Text>
                </View>
                <View style = {Styles.weatherContainer}>
                    <Image
                        style = {Styles.weatherIcon}
                        source={{uri : capitalDetails?.current?.weather_icons[0]}}
                    />
                </View>
            </View>
            <View style = {Styles.detailsContainer}>
                <View style = {Styles.windSpeedContainer}>
                    <Feather name="wind" size={40} color="#ffffff" />
                    <Text style = {Styles.windSpeed}>
                        {capitalDetails?.current.wind_speed}
                        <Text style = {Styles.speedUnit}>
                            km/hr
                        </Text>
                    </Text>
                </View>
                <View style = {Styles.precipitationContainer}>
                    <Entypo name="drop" size={40} color="#ffffff" />
                    <Text style = {Styles.precipetation}>
                        {capitalDetails.current.precip}
                        <Text style = {Styles.precipetationUnit}>
                            mm
                        </Text>
                    </Text>
                </View>
            </View>
        </View>
    </ImageBackground>
  )
}

export default CapitalWeather;