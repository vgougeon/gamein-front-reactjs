import React, { Component } from "react";
import './switchLayout.scss';
class SwitchLayout extends Component {
    constructor(props) {
        super(props);
        this.state={
            switch: 0,
            items: ['fas fa-th', 'fab fa-cc-paypal', 'fab fa-paypal']
        }
    }
    switchTo = (id) => { this.setState({ switch: id }) }
    render(){
        let style;
        if(this.state.switch === 0){ style = { justifyContent: 'flex-start'}}
        else if(this.state.switch === 1){ style = { justifyContent: 'center'}}
        else if(this.state.switch === 2){ style = { justifyContent: 'flex-end'}}
        return(
            <div className='switch-layout' style={ style }>
                { this.state.items.map((item, i) =>
                    <i key={ i } className={item + (this.state.switch === i ? ' active' : '')} 
                    onClick={() => { this.switchTo(i) }} />
                )}
            </div>
        );
    }
}
export default SwitchLayout;