import * as React from 'react';
import HomeScreen, {getCountry} from ".";
import {render, fireEvent} from '@testing-library/react-native';
import '@testing-library/jest-dom';
import axios from "axios";
import { HOMESCREEN_KEYBOARD_AVOIDING_VIEW, HOME_SCREEN_SUBMIT_BUTTON } from '../../Constants/Strings';


const renderComponent = (props) => render(<HomeScreen {...props} />)

jest.mock('axios');


describe('renderHomeScreen' , () => {
    it('should render Home Screen main component' , () => {
        const {getByTestId} = renderComponent();
        expect(getByTestId(HOMESCREEN_KEYBOARD_AVOIDING_VIEW)).toBeDefined();
    })
    it('should render HomeScreenSubmitButton' , () => {
        const navigate = jest.fn()
        const {getByTestId} = renderComponent({navigation: {navigate}});
        expect(getByTestId(HOME_SCREEN_SUBMIT_BUTTON)).toBeDefined();
        fireEvent.press(getByTestId(HOME_SCREEN_SUBMIT_BUTTON))
    })
    it('should test axios call' ,  async() => {
        const {getByTestId} = renderComponent({country: 'bharat'});
        axios.get.mockResolvedValueOnce([]);
        const result = await getCountry('bharat');
        expect(axios.get).toHaveBeenCalledWith(`https://restcountries.com/v3.1/name/bharat`)
    })
})