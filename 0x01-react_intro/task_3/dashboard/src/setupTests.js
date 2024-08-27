import Enzyme from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';

// Configure Enzyme with the React 18 adapter
Enzyme.configure({ adapter: new Adapter() });