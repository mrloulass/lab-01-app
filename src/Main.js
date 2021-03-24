import React from 'react';
import HornedBeasts from './HornedBeasts.js';


class Main extends React.Component {
    render() {
        return (
            <div>
                <HornedBeasts name='HornedA' title= 'abc' imgUrl='https://via.placeholder.com/250' description='abcdef' />
                <HornedBeasts name='HornedB' title= 'abc' imgUrl='https://via.placeholder.com/250' description='hijklmn' />
                <HornedBeasts name='HornedC' title= 'abc' imgUrl='https://via.placeholder.com/250' description='oqrstuv' />
            </div>
        );
    }
}

export default Main;
