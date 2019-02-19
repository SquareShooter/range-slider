import React, { Component } from 'react';
import './range-slider.css';

class RangeSlider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0,
            minValue: 0,
            maxValue: 100,
            step: 10
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        let labels = [],
            labelsQuantity = this.state.maxValue / this.state.step,
            rangeSliderStyle = {
                width: labelsQuantity * this.state.step + '%'
            },
            labelWrapStyle = {
                width: (labelsQuantity + 1) * this.state.step + '%'
            },
            labelStyle = {
                width: labelsQuantity + '%'
            };

        for (let i = 0; i < labelsQuantity + 1; i++) {
            labels.push(<div className="range-slider__value" key={i} style={labelStyle}>{(i) * this.state.step}</div>);
        }
        return (
            <div className="range-slider">
                <div className="range-slider__current-value">Range value: {this.state.value}</div>
                <input type="range" min={this.state.minValue} max={this.state.maxValue} step={this.state.step} value={this.state.value} onChange={this.handleChange} style={rangeSliderStyle} />
                <div className="range-slider__values" style={labelWrapStyle}>
                    {labels}
                </div>
            </div>
        );
    }
}

export default RangeSlider;