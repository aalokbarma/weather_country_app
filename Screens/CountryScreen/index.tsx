import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import Styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import countryScreenBg from '../../Assets/CountryScreenBG.jpg';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';

interface Countrytypes {
    countryData:{
        countryData: {
            capital: string,
            name: {
                common: string
            },
            flags: {
                png: string
            },
            population: string
        }
    }
}

const CountryScreen = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const route = useRoute();
    const response:any = route.params;
    const countryData = response.countryData[0]

    const ACCESS_KEY = '17cffae7207518cb304022f1568d94e5'
    
    const getCapitalDetails = async () =>
        await axios.get(`http://api.weatherstack.com/current?access_key=${ACCESS_KEY}&query=${countryData.capital[0]}`);

    const onWeatherButtonPress = async () => {
        const response = await getCapitalDetails();
        const capitalDetails = response.data
        navigation.navigate('CapitalWeather', {capitalDetails})
    }

  return (
    <ImageBackground source={countryScreenBg} style = { Styles.countryScreen}>
        <View style = {Styles.countryHeader}>
            <TouchableOpacity style = {Styles.backIconContainer} onPress = {() => navigation.goBack()}>
                <AntDesign name="left" size={24} color='#26abff' />
            </TouchableOpacity>
            <Text style = {Styles.countryHeaderText}>
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
                    <FontAwesome5 name="place-of-worship" size={40} color="#444" />
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
                    <MaterialIcons name="groups" size={40} color="#444" />
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
                    <MaterialIcons name="place" size={40} color="#444" />
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