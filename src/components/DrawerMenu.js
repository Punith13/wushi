import React , { Component } from 'react'; 
import { connect } from 'react-redux'; 
import { getlocation } from '../Actions'; 

class DrawerMenu extends Component {

    handleClick(){
        this.props.getlocation();
    }
    render(){
        return (
            <ul>
                <li onClick={() => this.handleClick() } >NAB ATM</li>
                <li>NAB Branch</li>
            </ul>
        )
    }
}

export default connect(null, {getlocation})(DrawerMenu); 