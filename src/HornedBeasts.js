import './HornedBeasts.css';
import React from 'react';

class HornedBeasts extends React.Component {
    render() {
        return (
            <div className="horned">
                <h2>{this.props.name}</h2>
                <img title={this.props.name} alt={this.props.name} src={this.props.imgUrl}></img>
                <p>{this.props.description}</p>
            </div>
        );
    }
}

export default HornedBeasts;
