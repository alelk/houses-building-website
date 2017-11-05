/**
 * Desktop App
 *
 * Created by Alex Elkin on 04.11.2017.
 */

import App from './App'
import {contacts} from '../data/company'
import {headerMenu} from '../data/site'
import HeaderSegment from '../segment/HeaderSegment'
import SiteMenu from '../menu/SiteMenu'

import React from 'react'
import Scroll from 'react-scroll';

class DesktopApp extends App {

    render() {
        return (
            <div className="DesktopApp" id="desktopApp">
                <Scroll.Element name="header">
                    {!this.state.isHeaderVisible && <SiteMenu fixed="top" menu={headerMenu} {...contacts} homeLink="/"/>}
                    <HeaderSegment menu={
                        <SiteMenu menu={headerMenu} {...contacts} homeLink="/" inverted/>
                    }
                                   onHeaderVisible={this.onHeaderShow}
                                   onHeaderHide={this.onHeaderHide}
                                   {...contacts}
                    />
                </Scroll.Element>

                {App.renderStatistic()}

                {App.renderServices()}

                {App.renderFooter()}
            </div>
        )
    }

}

export default DesktopApp;