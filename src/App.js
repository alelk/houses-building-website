import './App.css';
import {contacts, statistics, services} from './data/company'
import {footerMenu, headerMenu} from './data/site'
import React, { Component } from 'react';
import Scroll, {scroller} from 'react-scroll';
import StatisticSegment from './segment/StatisticSegment'
import ServicesSegment from './segment/ServicesSegment'
import HeaderSegment from './segment/HeaderSegment'
import FooterSegment from './segment/FooterSegment'
import SiteMenu from './menu/SiteMenu'
import SideNavigation from './menu/SideNavigation'
import {Responsive} from 'semantic-ui-react'

class App extends Component {

    constructor(props) {
        super(props);
        this.onHeaderShow = this.onHeaderShow.bind(this);
        this.onHeaderHide = this.onHeaderHide.bind(this);
        this.toggleSideNavigationVisibility = this.toggleSideNavigationVisibility.bind(this);
        this.onSideNavigationHide = this.onSideNavigationHide.bind(this);
        this.state = {
            isHeaderVisible: true,
            isSideNavigationVisible: false
        }
    }

    componentWillReceiveProps(nextProps) {
        const {hash, key, pathname} = nextProps.location;
        if (key === this.props.location.key) return;
        console.log("next: ", nextProps);
        if (/#(\w+)$/.test(hash) && key !== this.props.location.key)
            this.scrollTo(/#(\w+)$/.exec(hash)[1]);
        else if ("" === hash && "/" === pathname)
            this.scrollTo("header");
    }

    toggleSideNavigationVisibility() {
        this.setState({isSideNavigationVisible: !this.state.isSideNavigationVisible})
    }

    onSideNavigationHide() {
        this.setState({isSideNavigationVisible: false})
    }

    scrollTo(elementId) {
        scroller.scrollTo(elementId, {duration: 500, smooth: true, offset:-50})
    }

    onHeaderShow() {
        this.setState({isHeaderVisible: true})
    }

    onHeaderHide() {
        this.setState({isHeaderVisible: false})
    }

    render() {
        return (
            <div className="App">

                <Responsive minWidth={1000}>
                    <Scroll.Element name="header">
                        {!this.state.isHeaderVisible && <SiteMenu fixed menu={headerMenu} {...contacts} homeLink="/"/>}
                        <HeaderSegment menu={
                            <SiteMenu menu={headerMenu} {...contacts} homeLink="/" inverted/>
                        }
                                       onHeaderVisible={this.onHeaderShow}
                                       onHeaderHide={this.onHeaderHide}
                                       {...contacts}
                        />
                    </Scroll.Element>

                    <Scroll.Element name="about">
                        <StatisticSegment statistics={statistics}/>
                    </Scroll.Element>

                    <Scroll.Element name="services">
                        <ServicesSegment services={services}/>
                    </Scroll.Element>

                    <FooterSegment menu={footerMenu} {...contacts}/>
                </Responsive>

                <Responsive maxWidth={999}>
                    <SiteMenu {...contacts} onMenuButtonClick={this.toggleSideNavigationVisibility} inverted style={{margin:"0"}}/>
                    <SideNavigation menu={headerMenu}
                                    visible={this.state.isSideNavigationVisible}
                                    onItemSelected={this.onSideNavigationHide}>
                        <Scroll.Element name="header">
                            <HeaderSegment {...contacts}/>
                        </Scroll.Element>

                        <Scroll.Element name="about">
                            <StatisticSegment statistics={statistics}/>
                        </Scroll.Element>

                        <Scroll.Element name="services">
                            <ServicesSegment services={services}/>
                        </Scroll.Element>

                        <FooterSegment menu={footerMenu} {...contacts}/>
                    </SideNavigation>
                </Responsive>
            </div>
        )
    }

}

export default App;