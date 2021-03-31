import { shallow } from "enzyme";
import { RealExampleRef } from "../../../components/04-useRef/RealExampleRef"

describe('pruebas con RealExampleRef', () => {
    
    const wrapper = shallow( <RealExampleRef />);
    
    test('should display correctly', () => {

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
        
    })

    test('should display MultipleCustomHooks component', () => {
        
        wrapper.find('button').simulate('click');
        expect(wrapper.find('MultipleCustomHooks').exists()).toEqual(true);
    })
    
    
    
})
