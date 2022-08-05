import * as React from 'react';
import CapitalWeather from ".";
import {render} from '@testing-library/react-native';


const renderComponent = (props) => render(<CapitalWeather {...props} />)

describe('renderHomeScreen' , () => {
    it('should render Home Screen main component' , () => {
        const {getByTestId} = renderComponent();
        expect(getByTestId('HomeScreenKeyboardAvoidingView')).toBeDefined();
    })
})