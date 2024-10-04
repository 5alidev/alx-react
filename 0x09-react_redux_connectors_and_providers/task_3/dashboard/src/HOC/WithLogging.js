import React, {Component} from 'react';

const HOC = (WrappedComponent) => {

    const name = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    class WithLogging extends Component {

        componentDidMount() {
            console.log(`Component ${name} is mounted`);
        }
    
        componentWillUnmount() {
            console.log(`Component ${name} is going to unmount`);
        }
    
        render() {
            return <WrappedComponent {...this.props} />;
        }
    };

    WithLogging.displayName = `WithLogging(${name})`;
	return WithLogging;
}

export default HOC;