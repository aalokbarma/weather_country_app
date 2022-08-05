import * as React from 'react';
import CountryScreen, {getCapitalDetails, ACCESS_KEY} from ".";
import {render, fireEvent} from '@testing-library/react-native';
import axios from "axios";
import { COUNTRYSCREEN_BACK_BUTTON, COUNTRYSCREEN_HEADER_TEXT, COUNTRYSCREEN_IMAGE_BACKGROUND } from '../../Constants/Strings';

const renderComponent = (props) => render(<CountryScreen {...props} />)

jest.mock(
    'react-native-vector-icons/AntDesign',
    () => 'MockedAntDesign',
  );
jest.mock(
    'react-native-vector-icons/FontAwesome5',
    () => 'MockedFontAwesome5',
  );
jest.mock(
    'react-native-vector-icons/MaterialIcons',
    () => 'MockedMaterialIcons',
  );

jest.mock('axios');

describe('renderHomeScreen' , () => {
    it('should render Country Screen main component' , () => {
        const {getByTestId} = renderComponent();
        expect(getByTestId(COUNTRYSCREEN_IMAGE_BACKGROUND)).toBeDefined();
    })
    it('should render CountryScreenBackButton' , () => {
        const goBack = jest.fn
        const {getByTestId} = renderComponent({navigation: {goBack}});
        expect(getByTestId(COUNTRYSCREEN_BACK_BUTTON)).toBeDefined();
        fireEvent.press(getByTestId(COUNTRYSCREEN_BACK_BUTTON))
    })
    it('should render CountryScreenHeaderText', () => {
      const {getByTestId} = renderComponent();
      expect(getByTestId(COUNTRYSCREEN_HEADER_TEXT)).toBeDefined();
    })
    it('should test axios call' ,  async() => {
      const countryData = {
        capital: ['New Delhi']
      }
      const {getByTestId} = renderComponent();
      axios.get.mockResolvedValueOnce([]);
      const result = await getCapitalDetails({countryData});
      expect(axios.get).toHaveBeenCalledWith(`http://api.weatherstack.com/current?access_key=${ACCESS_KEY}&query=${countryData.capital[0]}`)
  })
})