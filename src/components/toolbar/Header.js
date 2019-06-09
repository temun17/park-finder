import React from 'react';
import { Image } from 'semantic-ui-react';
import DrawerToggleButton from '../sidedrawer/DrawerToggleButton';

const Header = props => (
    <header className="header">
        <nav className="header-navigation">
            <div className="header_toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="header_logo"><a href="/"><Image src="image/parkfinder.png" alt="" inline style={{height: 100}} /></a></div>
            <div className="spacer"></div>
            <div className="header_navigation-item">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Header;