import React, { Component } from "react";
import './selectRank.scss';
import AnimateHeight from "react-animate-height";
import SwitchLayout from "../switchLayout/switchLayout";

class SelectRank extends Component {
    constructor(props){
        super(props);
        this.state = {
            height : 0,
            selected: 2,
            items: ['Classement par popularité','Classement par notation', 'Classement par nouveauté']
        }
    }

    rsShow = () => {
		this.setState({ height : this.state.height === 0 ? 'auto' : 0 })
    }
    switchTo = (id) => { this.setState({ selected: id })}
    render(){
        return(
            <React.Fragment>
                <div className="rank-select" onClick={this.rsShow}>
                    <div className="rs-item">
                        <span>{ this.state.items[this.state.selected] }</span>
                        <i className="ml-5 fas fa-chevron-down"/>
                    </div>
                </div>
                < AnimateHeight className="rs-list" height={this.state.height} duration={200} >
                    <div className="bg-adjust">
                        { this.state.items.map((item, i) =>
                            <React.Fragment key={ i }>
                            { i !== this.state.selected &&
                                <div className="rs-item" onClick={() => { this.switchTo(i); this.rsShow() }}>
                                    <span>{ item }</span>
                                </div>
                            }
                            </React.Fragment>
                        )}
                    </div>
                </ AnimateHeight>
            </React.Fragment>
        )
    }
}
export default SelectRank;