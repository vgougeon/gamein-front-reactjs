import React, { Component } from 'react';
import axios from 'axios';
import Cropper from 'cropperjs';
import { appendFile } from 'fs';
import 'cropperjs/dist/cropper.css';
import './newSkin.scss';
class NewSkin extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            editing: false,
            skin: null
        }
        this.cropper = false
        this.canvasRef = React.createRef();
    }
    componentDidMount() {
        this.canvas = this.canvasRef.current
        this.canvascontext = this.canvasRef.current.getContext('2d');
    }
    sendSkin = async () => {
        let formData = new FormData();
        let img = await this.cropper.getCroppedCanvas().toDataURL('image/jpeg', 0.88);
        console.log(img)
        img = await this.dataURItoBlob(img)
        await formData.append("skin", img);
        await formData.append("gameId", this.props.gameId);
        axios.post('http://54.37.228.12/api/newSkin', formData,
        {
        headers: {
            'Content-Type': 'multipart/form-data'
        }})
        .then(res => {
            alert(res.data)
        })
    }
    dataURItoBlob = (dataURI) => {
        // convert base64/URLEncoded data component to raw binary data held in a string
        var byteString;
        if (dataURI.split(',')[0].indexOf('base64') >= 0)
            byteString = atob(dataURI.split(',')[1]);
        else
            byteString = unescape(dataURI.split(',')[1]);
        // separate out the mime component
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        // write the bytes of the string to a typed array
        var ia = new Uint8Array(byteString.length);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ia], {type:mimeString});
    }
    newSkin = async (e) => {
        let img = new Image();
        img.crossOrigin = 'anonymous'
        img.src = URL.createObjectURL(e.target.files[0]);
        await this.setState({
            skin: img
        })
        let self = this
        self.state.skin.onload = function() {
            self.canvas.width = self.state.skin.naturalWidth;
            self.canvas.height = self.state.skin.naturalHeight;
            self.canvascontext.drawImage(self.state.skin, 0, 0, self.state.skin.naturalWidth, self.state.skin.naturalHeight );
            self.cropper = new Cropper(self.canvas, {
                aspectRatio: 5 / 1,
                viewMode: 3,
                dragMode: 'move',
                autoCropArea: 1,
                restore: false,
                modal: false,
                guides: false,
                highlight: false,
                cropBoxMovable: false,
                cropBoxResizable: false,
                zoom: 1,
                toggleDragModeOnDblclick: false,
            });
        };
    }
    render() { 
        return (               
            <div className="new-skin-container">
                <input type="file" name="new-skin-file" id="new-skin-file"
                onChange={ this.newSkin }
                />
                { !this.state.skin &&
                <label htmlFor="new-skin-file" className="stroked-theme button s-1">
                    Nouveau skin
                </label>
                }
                { this.state.skin && 
                <button type="submit" className="green-success" onClick={ this.sendSkin }><i className="fas fa-check-circle mr-3"/>Valider !</button>
                }
                <div className="new-skin" id="new-skin">
                <canvas ref={ this.canvasRef}></canvas>
                </div>
            </div>
        );
    }
}
 
export default NewSkin;
