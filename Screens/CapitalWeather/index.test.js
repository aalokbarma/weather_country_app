import * as React from 'react';
import CapitalWeather from ".";
import {render, fireEvent} from '@testing-library/react-native';
import { CAPITAL_WEATHER_BACK_ICON, CAPITAL_WEATHER_KEYBOARD_AVOIDING_VIEW } from '../../Constants/Strings';


const renderComponent = (props) => render(<CapitalWeather {...props} />)

jest.mock(
    'react-native-vector-icons/AntDesign',
    () => 'MockedAntDesign',
  );
jest.mock(
    'react-native-vector-icons/Feather',
    () => 'MockedFeather',
  );
jest.mock(
    'react-native-vector-icons/Entypo',
    () => 'MockedEntypo',
  );

describe('renderHomeScreen' , () => {
    it('should render Capital Weather main component' , () => {
        const {getByTestId} = renderComponent();
        expect(getByTestId(CAPITAL_WEATHER_KEYBOARD_AVOIDING_VIEW)).toBeDefined();
    })
    it('should render Capital Weather Back Icon' , () => {
        const goBack = jest.fn
        const {getByTestId} = renderComponent({navigation: {goBack}});
        expect(getByTestId(CAPITAL_WEATHER_BACK_ICON)).toBeDefined();
        fireEvent.press(getByTestId(CAPITAL_WEATHER_BACK_ICON))
    })
})