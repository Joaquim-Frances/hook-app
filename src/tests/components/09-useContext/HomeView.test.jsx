import { mount, shallow } from 'enzyme';
import React from 'react';
import { HomeView } from '../../../components/09-useContext/HomeView';
import { UserContext } from '../../../components/09-useContext/UserContext';


describe('Pruebas en HomeView', () => {

    const user = {
        name: 'Quim',
        email: 'quimifrances@gmaill.com'
    }

    const wrapper = shallow(  //mount no funciona
    <UserContext.Provider value={{user}}>
    <HomeView />
    </UserContext.Provider>
    );

    test('should display correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
    
})
