import React from 'react';
import './expandPostImage.scss'
import Img from '../../utils/img/img';
const ExpandPostImage = (props) => {
    return (  
        <div className="expandPostImage">
            <Img 
            src={'/f/posts/' + props.path }
            alt="Post media"/>  
        </div>
    );
}
 
export default ExpandPostImage;