import {UserContext} from "../../../../services/auth/userProvider";
import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./userCardMin.scss";

class UserCardMin extends Component {
  static contextType = UserContext;
  render() {
    return (
      <div className="box s-1 account min">
        {this.context.auth.skin && (<img
          className="banner min"
          src={"http://njak.fr/assets/imgs/skins/" + this.context.auth.skin + ".png"}
          alt="User Banner"/>)}
        <div className="info min">
            
          {this.context.auth.avatar && <img
            className="avatar"
            src={'http://njak.fr/assets/imgs/accounts/' + this.context.auth.avatar}
            alt="User Profile"/>
            }
          <div className="d-flex flex-column">
            <Link to={'user/' + this.context.auth.username}>
              <span className="username ml-2 font-weight-bold">
                {this.context.auth.username}
              </span>
            </Link>
            <span className="grade ml-2">
              {this.context.auth.gradeName}
            </span>
          </div>
        </div>
        <div className="experience-bar" style={{width: '' + (this.context.auth.experience * 10) % 100  + '%' }}>
          <span></span>
        </div>
      </div>
    )
  }
}

export default UserCardMin;