import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import Styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import capitalScreenBg from '../../Assets/CapitalScreenBG.jpg';
import { CAPITAL_WEATHER_BACK_ICON, CAPITAL_WEATHER_KEYBOARD_AVOIDING_VIEW } from '../../Constants/Strings';
import Colors from '../../Constants/Colors';
import Typography from '../../Constants/Typography';

const CapitalWeather = ({navigation, route}:any) => {

    const capitalDetails:any = route?.params?.capitalDetails;

    const onBackIconPress = () => {
        navigation.goBack();
    }

  return (
    <ImageBackground source={capitalScreenBg} style = {Styles.capitalWeather} testID = {CAPITAL_WEATHER_KEYBOARD_AVOIDING_VIEW}>
        <View style = {Styles.capitalHeader}>
            <TouchableOpacity style = {Styles.backIconContainer} onPress = {onBackIconPress} testID = {CAPITAL_WEATHER_BACK_ICON}>
                <AntDesign name="left" size={Typography.fontSize.SIZE_24} color={Colors.WHITE} />
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
                    <Feather name="wind" size={Typography.fontSize.SIZE_40} color={Colors.WHITE} />
                    <Text style = {Styles.windSpeed}>
                        {capitalDetails?.current.wind_speed}
                        <Text style = {Styles.speedUnit}>
                            km/hr
                        </Text>
                    </Text>
                </View>
                <View style = {Styles.precipitationContainer}>
                    <Entypo name="drop" size={Typography.fontSize.SIZE_40} color={Colors.WHITE} />
                    <Text style = {Styles.precipetation}>
                        {capitalDetails?.current.precip}
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