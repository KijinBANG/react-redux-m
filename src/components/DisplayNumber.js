import React, {Component} from "react";

export default class DisplayNumber extends Component{
    render() {
        return (
            <div>
                <h2>
                    Display Number: &nbsp;
                    <input
                        type={'text'}
                        value={this.props.number}
                        readOnly
                    />
                    {this.props.unit}
                </h2>
            </div>
        );
    }
}