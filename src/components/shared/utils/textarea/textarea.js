import React, { Component } from 'react';
import "./textarea.scss"

class TextArea extends Component {
    constructor(props) {
        super(props)
        this.textarea = React.createRef();
        this.baseHeight = 52
        this.state = {
            height: 52
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(this.props.value !== prevProps.value){
            this.autoGrow()
        }
    }
    render() { 
        return (  
            <textarea 
            ref={this.textarea}
            className="p-g"
            placeholder={ this.props.placeHolder }
            name={ this.props.name }
            value={ this.props.value }
            onChange={ this.props.onChange }
            style={{height: this.state.height + "px"}}
            >
            </textarea>
        );
    }
    autoGrow() {
        this.textarea.current.style.height = "52px"
        const height = this.textarea.current.scrollHeight
        this.textarea.current.style.height = height + "px"
        if(this.state.height !== height) {
            this.setState({ height: height })
        }
    }
}
 
export default TextArea;