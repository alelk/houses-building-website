/**
 * App
 *
 * Created by Alex Elkin on 04.11.2017.
 */

import {footerMenu, headerMenu} from '../data/site'
import {contacts, statistics, services} from '../data/company'
import StatisticSegment from '../segment/StatisticSegment'
import ServicesSegment from '../segment/ServicesSegment'
import FooterSegment from '../segment/FooterSegment'

import './App.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import scrollToComponent from 'react-scroll-to-component';
import SiteMenu from "../menu/SiteMenu";
import SideNavigation from "../menu/SideNavigation";
import HeaderSegment from "../segment/HeaderSegment";

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
        };
        this.componentRefs = {};
    }

    componentDidUpdate(prevProps) {
        const {hash, key} = this.props.location;
        if (key === prevProps.location.key) return;
        this.scrollTo(App.elementIdFromHash(hash))
    }

    componentDidMount() {
        this.scrollTo(App.elementIdFromHash(this.props.location.hash))
    }

    static elementIdFromHash(hash) {
        if (/#(\w+)$/.test(hash))
            return /#(\w+)$/.exec(hash)[1];
        if ("" === hash) return 'header';
        return null;
    }

    scrollTo(elementId) {
        scrollToComponent(this.componentRefs[elementId], { offset: 0, align: 'top', duration: 500, ease:'inExpo'});
    }

    toggleSideNavigationVisibility() {
        this.setState({isSideNavigationVisible: !this.state.isSideNavigationVisible})
    }

    onSideNavigationHide() {
        this.setState({isSideNavigationVisible: false})
    }

    onHeaderShow() {
        this.setState({isHeaderVisible: true})
    }

    onHeaderHide() {
        this.setState({isHeaderVisible: false})
    }

    renderBody() {
        return (
            <React.Fragment>
                <StatisticSegment ref = {divRef => this.componentRefs.about = divRef} statistics={statistics}/>
                <ServicesSegment ref = {divRef => this.componentRefs.services = divRef} services={services}/>
                <FooterSegment ref = {divRef => this.componentRefs.contacts = divRef} menu={footerMenu} {...contacts}/>
            </React.Fragment>
        )
    }

    render() {
        const {mobile} = this.props;
        return (
            <div className={`App ${mobile ? 'mobile' : 'desktop'}`}>
                {mobile ? (
                    <React.Fragment>
                        <SiteMenu {...contacts} onMenuButtonClick={this.toggleSideNavigationVisibility} inverted
                                  style={{margin: "0"}}/>
                        <SideNavigation menu={headerMenu}
                                        visible={this.state.isSideNavigationVisible}
                                        onItemSelected={this.onSideNavigationHide}>
                            <HeaderSegment {...contacts} ref = {divRef => this.componentRefs.header = divRef}/>
                            {this.renderBody()}
                        </SideNavigation>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        {!this.state.isHeaderVisible && <SiteMenu fixed="top" menu={headerMenu} {...contacts} homeLink="/"/>}
                        <HeaderSegment ref = {divRef => this.componentRefs.header = divRef}
                                       menu={<SiteMenu menu={headerMenu} {...contacts} homeLink="/" inverted/>}
                                       onHeaderVisible={this.onHeaderShow}
                                       onHeaderHide={this.onHeaderHide}
                                       {...contacts}
                        />
                        {this.renderBody()}
                    </React.Fragment>
                )}
            </div>
        )
    }
}

App.propTypes = {
    mobile: PropTypes.bool
};

export default App;