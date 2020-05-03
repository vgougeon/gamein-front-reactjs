import React, { Component } from "react";
import './selectRank.scss';
import AnimateHeight from "react-animate-height";
import { withTranslation } from 'react-i18next';

class SelectRank extends Component {
    constructor(props){
        super(props);
        this.state = {
            height : 0,
            selected: 2,
            items: ['by-popularity','by-note', 'by-date']
        }
    }

    rsShow = () => {
		this.setState({ height : this.state.height === 0 ? 'auto' : 0 })
    }
    switchTo = (id) => { this.setState({ selected: id })}
    render(){
        const { t } = this.props
        return(
            <React.Fragment>
                <div className="rank-select" onClick={this.rsShow}>
                    <div className="rs-item">
                        <span>{ t(this.state.items[this.state.selected]) }</span>
                        <i className="fas fa-chevron-down"/>
                    </div>
                    < AnimateHeight className="rs-list s-2" height={this.state.height} duration={200} >
                        { this.state.items.map((item, i) =>
                            <React.Fragment key={ i }>
                            { i !== this.state.selected &&
                                <div className="rs-item" onClick={() => { this.switchTo(i); this.rsShow() }}>
                                    <span>{ t(item) }</span>
                                </div>
                            }
                            </React.Fragment>
                        )}
                    </ AnimateHeight>
                </div>
            </React.Fragment>
        )
    }
}
export default withTranslation()(SelectRank);