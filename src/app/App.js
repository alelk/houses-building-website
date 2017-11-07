/**
 * App
 *
 * Created by Alex Elkin on 04.11.2017.
 */

import {footerMenu} from '../data/site'
import {contacts, statistics, services} from '../data/company'
import StatisticSegment from '../segment/StatisticSegment'
import ServicesSegment from '../segment/ServicesSegment'
import FooterSegment from '../segment/FooterSegment'

import './App.css';
import React, { Component } from 'react';
import Scroll from 'react-scroll';
import scrollToComponent from 'react-scroll-to-component';

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
            App.scrollTo(/#(\w+)$/.exec(hash)[1]);
        else if ("" === hash && "/" === pathname)
            App.scrollTo("header");
    }

    static scrollTo(elementId) {
        scrollToComponent(this.Statistic, { offset: 0, align: 'top', duration: 500, ease:'inExpo'});
        /*
        Scroll.scroller.scrollTo(
            elementId,
            {duration: 500, smooth: true, offset:-50}
        );*/
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

    static renderStatistic() {
        return (
            <Scroll.Element name="about">
                <StatisticSegment ref = {(divRef) => this.Statistic = divRef} statistics={statistics}/>
            </Scroll.Element>
        )
    }

    static renderServices() {
        return (
            <Scroll.Element name="services">
                <ServicesSegment services={services}/>
            </Scroll.Element>
        )
    }

    static renderFooter() {
        return (
            <FooterSegment menu={footerMenu} {...contacts}/>
        )
    }

}

export default App;