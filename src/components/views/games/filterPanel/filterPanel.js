import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import AnimateHeight from 'react-animate-height';
import axios from 'axios';
import './filterPanel.scss';
import { motion } from 'framer-motion';
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
        axios.get('/api/getConsoles').then(res => {
            this.setState({
                consoles: res.data
            })
        })
    }
    expand = (id) => {
        const { expanded } = this.state;
        expanded[id] = expanded[id] === 0 ? 'auto' : 0
        this.setState({
            expanded
        })
    } 
    
    render() { 
        const { t } = this.props
        return ( 
            <motion.div className="filters-container"
            initial={{ width: 0, opacity: 0, x: 350}}
            animate={{ width: "350px", opacity: 1, x:0}}
            exit={{ width: 0, opacity: 0, x:350}}
            // transition={{ duration: }}
            >
            <div className="s-1 box">
                <div className="box-head">
                    {t('filters')}
                    <i className="fas fa-filter" />
                </div>
                <div className="search-input-container">
                    <input className="search-filter" type="search" placeholder={t('search-filter')} />
                    <i class="fas fa-search"></i>
                </div>
            </div>
            <div className="s-1 box mt-g">
                <div className="filter-category">
                    <div className="box-head" onClick={() => this.expand(0) } >
                        <span>{t('consoles')} <span className="quantity">{ this.state.consoles.length }</span></span>
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
                                <div className="si-item" key={ console.id } onClick={() => this.consoleClick(console)}>
                                    <span>{ console.name }</span>
                                    <i className="fas fa-times" />
                                </div>
                            )}
                        </div>
                        <div className="content">
                            { this.state.consoles.map((console) =>
                                <div key = { console.id } className={ 'item ' + (this.state.filters.consoles.indexOf(console) !== -1 ? 'selected' : '')}
                                onClick={() => this.consoleClick(console)}>
                                    <div className="img-item" style={{ background: console.background }}>
                                        <img src={'/f/consoles/' + console.id + '.png'} alt={ console.name }/>
                                    </div>
                                </div>
                            )}
                        </div>
                    </AnimateHeight>
                </div>
            </div>
            <button className="transparent-button mx-auto my-2" onClick={ this.deselectAll }>{t('unselall')}</button>
            </motion.div>
        );
    }
}
 
export default withTranslation()(FilterPanel);