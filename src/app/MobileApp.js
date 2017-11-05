/**
 * Mobile App
 *
 * Created by Alex Elkin on 04.11.2017.
 */

import App from './App'
import {contacts} from '../data/company'
import {headerMenu} from '../data/site'
import HeaderSegment from '../segment/HeaderSegment'
import SiteMenu from '../menu/SiteMenu'
import SideNavigation from '../menu/SideNavigation'

import React from 'react'
import Scroll from 'react-scroll';

class MobileApp extends App {

    render() {
        return (
            <div className="MobileApp">
                <SiteMenu {...contacts} onMenuButtonClick={this.toggleSideNavigationVisibility} inverted
                          style={{margin: "0"}}/>
                <SideNavigation menu={headerMenu}
                                visible={this.state.isSideNavigationVisible}
                                onItemSelected={this.onSideNavigationHide}>
                    <Scroll.Element name="header">
                        <HeaderSegment {...contacts}/>
                    </Scroll.Element>

                    {App.renderStatistic()}

                    {App.renderServices()}

                    {App.renderFooter()}
                </SideNavigation>
            </div>
        )
    }

}

export default MobileApp;