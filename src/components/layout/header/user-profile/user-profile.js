import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './user-profile.scss';
import * as theme from '../../../../services/themes/themeService'; 
import ExperienceBar from '../../../shared/user/experienceBar/experienceBar';
import { withTranslation } from 'react-i18next';
import AnimateHeight from 'react-animate-height';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = { height: 0  }
  }

  expandLang = () => {
    this.setState({ height : this.state.height === 0 ? 'auto' : 0 })
  }

  render() {
    const { t, i18n } = this.props;
    return ( 
      <div className="user-profile">
      <div className="head">
        <img src={ 'http://njak.fr/assets/imgs/skins/' + this.props.skin + '.png'} 
        className="user-banner" 
        alt="Your banner" />
        <div className="profile-head-content">
          <div className="closeUserProfile" onClick={ this.props.toggle }>
            <i className="fas fa-angle-double-right"></i>
          </div>
          <img src={ 'http://njak.fr/assets/imgs/accounts/' + this.props.avatar} className="user-avatar" alt="User Profile" />
          <div className=" m-g d-flex flex-column">
            <Link to={ "/user/" + this.props.username } className="bold">{ this.props.display_name }</Link>
            <span className='username'>@{ this.props.username }</span>
          </div>
        </div>
      </div>
      <ExperienceBar experience={ this.props.experience } />
      <div className="d-flex justify-content-between">
        <div className="stat pb-1 pt-2">
          <span className="font-weight-bold text-size-l">{ this.props.level }</span>
          <span className="text-size-xs">{t('level')}</span>
        </div>
        <div className="stat pb-1 pt-2">
          <span className="font-weight-bold text-size-l">{ this.props.points }</span>
          <span className="text-size-xs">{t('points')}</span>
        </div>
        <div className="stat pb-1 pt-2">
          <span className="font-weight-bold text-size-l">{ this.props.followers }</span>
          <span className="text-size-xs">{t('followers')}</span>
        </div>
      </div>
      <div className="wide-button cristals">
            <img className="icon-cristal mr-2" src="../../../../../assets/gem2.svg" alt='cristals' />
            <span className="bold ml-2 mr-1">584 </span>
            <span className="text-size-m"> Cristaux</span>
            <img className="background-cristal" src="../../../../../assets/gem.svg" alt='cristals' />
            <img className="background-cristal blur" src="../../../../../assets/gem.svg" alt='cristals' />

            <img className="p1" src="../../../../../assets/gem.svg" alt='cristals' />
            <img className="p2" src="../../../../../assets/gem.svg" alt='cristals' />
            <img className="p3" src="../../../../../assets/gem.svg" alt='cristals' />
            <img className="p4" src="../../../../../assets/gem.svg" alt='cristals' />
            <img className="p5" src="../../../../../assets/gem.svg" alt='cristals' />
          
            
        </div>
      <div className="d-flex flex-column">
        <div className="wide-button">
          <i className="fas fa-user-circle mr-3" /><span>{t('my-account')}</span>
        </div>
        <div className="wide-button" onClick={ this.expandLang}>
          <div className="d-flex justify-content-between w-100">
            <div>
              <i className="fas fa-globe mr-3 "/><span>{t('language')}</span>
            </div>
            <div className="d-flex align-items-center">
              <span>{ t(i18n.language) }</span><i className={"transition open-menu fas fa-chevron-down ml-2 " + ((this.state.height === 'auto')? "rotate" : "")} />
            </div>
          </div>
        </div>
        <AnimateHeight
        className="lang-select-list"
          duration={ 200 }
          height={ this.state.height }
        >
          <div className="wide-button" onClick={() => {i18n.changeLanguage('en'); this.expandLang() } }>
            <div className="d-flex justify-content-between align-items-center w-100">
              <span>English</span>
              <span className="rounded-flag flag-icon-background flag-icon-gb "></span>
            </div>
          </div>
          <div className="wide-button" onClick={() => {i18n.changeLanguage('fr'); this.expandLang()}}>
            <div className="d-flex justify-content-between align-items-center w-100">
              <span>Français</span>
              <span className="rounded-flag flag-icon-background flag-icon-fr "></span>
            </div>
          </div>
          <div className="wide-button" onClick={() => {i18n.changeLanguage('jp'); this.expandLang()}}>
            <div className="d-flex justify-content-between align-items-center w-100">
              <span>日本語</span>
              <span className="rounded-flag flag-icon-background flag-icon-jp "></span>
            </div>
          </div>
        </AnimateHeight>
        <div className="wide-button">
          <div className="d-flex justify-content-between w-100">
            <div>
              <i className="fas fa-palette mr-3" /><span>{t('themes')}</span>
            </div>
            <div className="d-flex">
              <div className="theme-picker white" onClick={() => theme.switchTheme(1)}></div>
              <div className="theme-picker black" onClick={() => theme.switchTheme(2)}></div>
              <div className="theme-picker bluetooth" onClick={() => theme.switchTheme(5)}></div>
              <div className="theme-picker predator" onClick={() => theme.switchTheme(4)}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
 
export default withTranslation()(UserProfile);
