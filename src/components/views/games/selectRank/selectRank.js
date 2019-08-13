import React, { Component } from "react";
import './selectRank.scss';
import AnimateHeight from "react-animate-height";

class SelectRank extends Component {
    constructor(props){
        super(props);
        this.state = {
            height : 0
        }
    }

    rsShow = () => {
		this.setState({ height : this.state.height === 0 ? 'auto' : 0 })
    }
    
    render(){
        return(
            <React.Fragment>
                <div className="rank-select" onClick={this.rsShow}>
                    <div className="rs-item">
                        <span>Classement par popularité </span>
                        <i className="ml-5 fas fa-chevron-down"/>
                    </div>
                </div>
                < AnimateHeight className="rs-list" height={this.state.height} duration={200} >
                    <div className="bg-adjust">
                        <div className="rs-item">
                            <span>Classement par notation</span>
                        </div>
                        <div className="rs-item">
                            <span>Classement par nouveauté</span>
                        </div>
                    </div>
                </ AnimateHeight>
            </React.Fragment>
        )
    }
}
export default SelectRank;