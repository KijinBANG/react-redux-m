import React, {Component} from "react";

export default class AddNumber extends Component{
    state = {size: 1}
    render() {
        return (
            <div>
                <h2>
                    Add Number: &nbsp;
                    <input
                        type={'button'}
                        value={'+'}
                        onClick={function(){
                            this.props.onClick(this.state.size)
                        }.bind(this)}
                        />
                    <input
                        type={'text'}
                        value={this.state.size}
                        onChange={function(e){
                            this.setState({size: Number(e.target.value)})
                        }.bind(this)}
                        />
                </h2>
            </div>
        );
    }
}