import React from 'react';
import Img from '../img/img'
import Icon from '../icons/icon'
import './miniAvatar.scss'
import { getAvatarUrl } from '../../../../services/profile/avatarService';
const MiniAvatar = (props) => {
    return (  
        <div className="position-relative mini-avatar mx-2" style={{ width: props.size, height: props.size }}>
            { props.host && <Icon fill="#f5cd2c" size="20px" name="crown" /> }
            <Img src={ getAvatarUrl(props.avatar, props.username) } />
        </div>
    );
}
 
export default MiniAvatar;