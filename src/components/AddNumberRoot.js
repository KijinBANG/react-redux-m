import React, {Component} from "react";
import AddNumber from "../containers/AddNumber";
import store from '../store'

export default class AddNumberRoot extends Component{
    render() {
        return (
            <div>
                <h2>
                    Add Number Root
                </h2>
                <AddNumber onClick={function(){
                    store.dispatch({type: 'INCREMENT', size: this.state.size});
                }.bind(this)}/>
            </div>
        );
    }
}