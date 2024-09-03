import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('BodySection', () => {
    it('the component should render correctly the children and one h2 element', () => {
        const bodySec = shallow(<BodySection title="test title" />);
		expect(bodySec.exists()).toBe(true);

        const bodySec2 = shallow(<BodySection title="test title"><p>test children node</p></BodySection>)
		expect(bodySec2.find('h2').text()).toBe('test title');
		expect(bodySec2.find('p').text()).toBe('test children node');
    });
});