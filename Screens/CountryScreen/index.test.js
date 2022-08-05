import * as React from 'react';
import CountryScreen from ".";
import {render} from '@testing-library/react-native';


const renderComponent = (props) => render(<CountryScreen {...props} />)

describe('renderHomeScreen' , () => {
    it('should render Home Screen main component' , () => {
        const {getByTestId} = renderComponent();
        expect(getByTestId('HomeScreenKeyboardAvoidingView')).toBeDefined();
    })
})