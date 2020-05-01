import React, { Component } from 'react';
import { motion } from "framer-motion"
import { connect } from 'react-redux';
import popup from '../../../store/popupActions';
import './popup.scss'
class Popup extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClick, false);
    }
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false)
    }
    handleClick = (e) => {
        if(!this.node.contains(e.target)) {
            popup.close()
        }
    }
    render() { 
        return ( 
            <motion.div 
            // drag 
            // dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            // dragElastic={1}
            // dragTransition={{ bounceStiffness: 200, bounceDamping: 15 }}
            // onDragEnd={(event, info) => {
            //     if((Math.abs(info.point.x) - 100) > 0 || Math.abs(info.point.y) - 100 > 0){
            //         console.log(event)
            //         console.log(info)
            //         popup.close()
            //     }
            // }}
            className={"popup-wrapper " +
            (this.props.outClickable ? 'popup-outclickable ' : '') +
            (this.props.blur ? 'popup-blur ' : '')
            }
                initial={{ opacity: 0, y:-100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y:100 }}
                transition={{ duration: 0.3 }}>
                <div className="popup-container" ref={node => this.node = node}>
                    { this.props.children }
                </div>
            </motion.div>
         );
    }
}
 
const mapStateToProps = (state) => ({
    outClickable: state.popup.outClickable,
    blur: state.popup.blur
})
export default connect(mapStateToProps)(Popup)