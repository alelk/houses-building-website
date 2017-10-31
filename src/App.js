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

class App extends Component {

    constructor(props) {
        super(props);
        this.onHeaderShow = this.onHeaderShow.bind(this);
        this.onHeaderHide = this.onHeaderHide.bind(this);
        this.state = {
            isHeaderVisible: true
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
                <Scroll.Element name="header">
                    {!this.state.isHeaderVisible && <SiteMenu fixed menu={headerMenu} {...contacts}/>}
                    <HeaderSegment menu={
                        <SiteMenu menu={headerMenu} {...contacts} inverted/>
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
            </div>
        )
    }

}

export default App;