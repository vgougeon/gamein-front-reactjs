import React, { Component } from 'react';
import './sidenav.scss';
class SideNav extends Component {
  state = { }
  render() { 
    return ( <section id="main">
    <aside>
        <div class="d-flex flex-column">
            <a href="">
                <div class="button">
                    <i class="fas fa-compass"></i> Home
                </div>
            </a>
            <a href="games">
                <div class="button">
                    <i class="fas fa-gamepad"></i> Games
                </div>
            </a>
            <a href="contribute">
                <div class="button">
                    <i class="fas fa-hands-helping"></i> Contribute
                </div>
            </a>
        </div>
        <div class="d-flex flex-column">
        </div>
    </aside>
</section> 
);
  }
}
 
export default SideNav;