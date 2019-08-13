import React, { Component } from "react";
import './switchLayout.scss';

class SwitchLayout extends Component {
    constructor(props) {
        super(props);
        this.state={
            switch: 2,
            items: ['fas fa-th', 'fab fa-cc-paypal', 'fab fa-paypal']
        }
    }
    switchTo = (id) => { this.setState({ switch: id }) }
    render(){
        alert("ok");
        return(
            <div className='switch-layout'>
                { this.state.items.map((item, i) =>
                    <i className={item + (this.state.switch === i ? ' active' : '')} 
                    onClick={() => { this.switchTo(i) }} />
                )}
            </div>
        )
    }
}
export default SwitchLayout;