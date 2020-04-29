import React, { Component } from "react";
import './switchLayout.scss';
class SwitchLayout extends Component {
    constructor(props) {
        super(props);
        let views = []
        let layouts = ["view-normal", "view-box", "view-line"]
        let index = layouts.findIndex(item => item === this.props.currentLayout)
        this.state={
            switch: index,
            items: ['fas fa-grip-horizontal', 'fas fa-grip-vertical', 'fas fa-grip-lines']
        }
    }
    switchTo = (id) => {
        this.setState({ switch: id })
        this.props.setLayout(id)
    }
    render(){
        return(
            <div className='switch-layout'>
                { this.state.items.map((item, i) =>
                    <i key={ i } className={item + (this.state.switch === i ? ' active' : '')} 
                    onClick={() => { this.switchTo(i) }} />
                )}
            </div>
        );
    }
}
export default SwitchLayout;