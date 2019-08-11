import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import AnimateHeight from 'react-animate-height';
import axios from 'axios';
import './filterPanel.scss';
class FilterPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            expanded: [0, 0, 0, 0],
            consoles: [],
            filters: {
                consoles: [],
                genres: []
            }
        }
        this.getConsoles()
        this.consoleReset = this.consoleReset.bind(this);
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.filters !== this.state.filters){
            const filters =  {
                consoles : this.state.filters.consoles.map(function(item) { return item.id; })
            }
            this.props.setFilters(filters)
        }
    }
    consoleClick = (id) => {
        const { consoles } = this.state.filters;
        if(consoles.indexOf(id) === -1){
            consoles.push(id)
        }
        else {
            let index = consoles.indexOf(id)
            if (index > -1) {
                consoles.splice(index, 1);
            }
        }
        this.setState( prevState => ({
            ...prevState,
            filters: {
                ...prevState.filters,
                consoles: consoles
            }
        }))
    }
    consoleReset(e) {
        e.stopPropagation(); 
        this.setState( prevState => ({
            ...prevState,
            filters: {
                ...prevState.filters,
                consoles: []
            }
        }))
    }
    deselectAll = (e) => {
        this.consoleReset(e);
    }
    getConsoles = () => {
        axios.get('http://54.37.228.12/api/getConsoles').then(res => {
            this.setState({
                consoles: res.data
            })
            this.expand(0)
        })
    }
    expand = (id) => {
        const { expanded } = this.state;
        expanded[id] = expanded[id] === 0 ? 'auto' : 0
        this.setState({
            expanded
        })
    } 
    //car imaginons il y je ne sais pas 36 élements à affficher bah ça va descendre bien bas ah oui pas faux
    render() { 
        const { t } = this.props
        return ( 
            <React.Fragment>
            <div className="filter-panel s-1 rounded overflow-hidden">
                <input className="search-filter w-100 p-4" type="search" placeholder={t('search-filter')} />
                <div className="filter-category">
                    <div className="head" onClick={() => this.expand(0) }>
                        <span>Consoles <span className="quantity">{ this.state.consoles.length }</span></span>
                        { this.state.filters.consoles.length !== 0 &&
                        <div className="current-filters">
                            <span>{this.state.filters.consoles.length + ' ' + t('entries') }</span>
                            <i className="fas fa-times" 
                            onClick={ this.consoleReset }/>
                        </div>
                        }
                    </div>
                    <AnimateHeight height={ this.state.expanded[0] }> 
                        <div className="selected-item">
                            { this.state.filters.consoles.map((console) =>
                                <div className="si-item" onClick={() => this.consoleClick(console)}>
                                    <span>{ console.name }</span>
                                    <i className="fas fa-times" />
                                </div>
                            )}
                        </div>
                        <div className="content">
                            { this.state.consoles.map((console) =>
                                <div className={ 'item ' + (this.state.filters.consoles.indexOf(console) !== -1 ? 'selected' : '')}
                                onClick={() => this.consoleClick(console)}>
                                    <img src={'http://54.37.228.12/f/consoles/' + console.id + '.jpg' } />
                                </div>
                            )}
                        </div>
                    </AnimateHeight>
                </div>
                <div className="filter-category">
                    <div className="head" onClick={() => this.expand(1) }>
                        <span>Genre <span className="quantity">45</span></span>
                        <div className="current-filters">
                            <span>1 sélection</span>
                            <i className="fas fa-times" />
                        </div>
                    </div>
                    <AnimateHeight height={ this.state.expanded[1] }> 
                        <div className="content">
                            <div className="item" />
                            <div className="item" />
                            <div className="item" />
                            <div className="item" />
                            <div className="item" />
                            <div className="item" />
                            <div className="item" />
                            <div className="item" />
                            <div className="item" />
                            <div className="item" />
                            <div className="item" />
                            <div className="item" />
                            <div className="item" />
                        </div>
                    </AnimateHeight>
                </div>
                <div className="btn-unselect-all mt-2 mb-2"
                onClick={ this.deselectAll }>Tout désélectionner</div>
            </div>
            </React.Fragment>
        );
    }
}
 
export default withTranslation()(FilterPanel);