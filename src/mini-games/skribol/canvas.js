import React, { Component } from 'react';
import socket from '../../services/socket/openSocket'
const paper = require('paper')

class Canvas extends Component {
    constructor() {
        super()
        this.size = 3
        this.color = "black"
        this.path = null
    }
    componentDidMount() {
        var skribol = document.getElementById('skribol');
        paper.setup(skribol);
        let path
        let tool = new paper.Tool();
        let preview = new paper.Path.Circle({
            center: new paper.Point(10, 10),
            radius: this.size,
            fillColor: this.color
        });
        
        tool.onMouseDown = (event) => {
            this.startPath(event.point, true)
        }
        tool.onMouseDrag = (event) => {
            this.continuePath(event.middlePoint, true)
            preview.position = event.middlePoint
        }
        tool.onMouseUp = (event) => {
            this.endPath(event.middlePoint, true)
        }

        tool.onMouseMove = (event) => {
            preview.position = event.middlePoint
        }
        paper.view.draw();
        this.events()
    }
    events() {
        socket.on('skribol-startPath', this.startPath.bind(this))
        socket.on('skribol-continuePath', this.continuePath.bind(this))
        socket.on('skribol-endPath', this.endPath.bind(this))
    }
    startPath(point, emit = false) {
        console.log("HELLO")
        this.path = new paper.Path();
        this.path.strokeColor = this.color;
        this.path.strokeWidth = this.size;
        this.path.add(new paper.Point(point.x, point.y));
        if(emit) socket.emit('skribol-startPath', {x: point.x, y: point.y})
    }
    continuePath(point, emit = false) {
        this.path.add(new paper.Point(point.x, point.y));
        if(emit) socket.emit('skribol-continuePath', {x: point.x, y: point.y})
    }
    endPath(point, emit = false) {
        console.log("HELLO3")
        this.path.simplify()
        delete this.path
        if(emit) socket.emit('skribol-endPath')
    }
    render() { 
        return <canvas id="skribol" resize="true"></canvas>;
    }
}
 
export default Canvas;

// tool.onKeyDown = ((event) => {
//     if(event.key === "up") {
//         let size = this.size
//         this.size += 1
//         preview.scale(this.size / size)
//     }
//     if(event.key === "down") {
//         let size = this.size
//         this.size -= 1
//         preview.scale(this.size / size)
//     }
// })