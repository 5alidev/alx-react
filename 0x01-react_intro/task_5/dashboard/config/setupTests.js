import Enzyme from 'enzyme';
import Adapter from '@wojtekmajta/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });