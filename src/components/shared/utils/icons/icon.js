import React, { Component } from 'react';
import './icon.scss'
import { motion, AnimatePresence } from 'framer-motion';
const icons = require('./icons.json')
class Icon extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.path = icons[props.name].path
        this.viewBox = icons[props.name].viewBox
        this.activeColor = icons[props.name].activeColor
    }
    render() { 
        return (
            <AnimatePresence>
            <div 
            className="icon-icon"
            style={{ width: this.props.size, height: this.props.size }}
            >
                <motion.svg viewBox={ this.viewBox } width={ this.props.size } height={ this.props.size }>
                    <AnimatePresence>
                    { !this.props.active ?
                        <motion.path
                        initial = {{ opacity: 0}}
                        animate = {{ opacity: 1}}
                        exit = {{ opacity: 0 }}
                        transition = {{ }}
                        d={ this.path }
                        fill={ this.props.fill || "var(--color)" }>
                        </motion.path> : null }
                    </AnimatePresence>
                    <AnimatePresence>
                    { this.props.active ?
                        <React.Fragment>
                        { this.props.fancy ?
                        <motion.path
                        initial = {{ opacity: 1, scale: 1, pathLength: 0}}
                        animate = {{ opacity: [0.5, 0.4, 0] , scale: [2.5, 1], pathLength: 1}}
                        exit = {{ opacity: 0, scale: [1, 3], pathLength: [1, 0] }}
                        transition = {{ duration: 0.5, ease: "easeOut" }}
                        d={ this.path }
                        stroke={ this.activeColor}
                        fill="none"> 
                        </motion.path> : null }
                        <motion.path
                        initial = {{ opacity: 0, scale: 1}}
                        animate = {{ opacity: 1, scale: 1}}
                        exit = {{ opacity: 0, scale: 2}}
                        transition = {{ duration: 0.5 }}
                        d={ this.path }
                        fill={ this.props.active ? this.activeColor : "#fff"}> 
                        </motion.path>
                        </React.Fragment>
                    : null }
                    </AnimatePresence>
                </motion.svg>
            </div>
            </AnimatePresence>
        );
    }
}
export default Icon;