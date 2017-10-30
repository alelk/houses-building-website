import Navigation from './Navigation'
import HouseBuildingCalculatorPanel from './panel/HouseBuildingCalcPanel'
import './App.css';
import {Contacts} from './data/data'
import headerBgr from './header-background.jpeg'

import AboutCompanyPanel from './header/AboutCompanyPanel'
import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import {Switch, Route, Link, withRouter} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
    Label,
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Visibility,
    Statistic,
} from 'semantic-ui-react'

const PageMenu = ({isFixed = false}) => (
    <Menu fixed={isFixed ? 'top' : undefined} size='large' inverted={!isFixed}>
        <Menu.Item as="a" hRef="#about">О нас</Menu.Item>
        <Menu.Item as="a">Услуги</Menu.Item>
        <Menu.Item position="right">
            <Label size='large' color='black'><Icon name='phone'/>{Contacts.phoneNumber}</Label>
        </Menu.Item>
    </Menu>
);

class App extends Component {

    constructor(props) {
        super(props);
        this.onHeaderShow = this.onHeaderShow.bind(this);
        this.onHeaderHide = this.onHeaderHide.bind(this);
        this.state = {
            isHeaderVisible: true
        }
    }

    onHeaderShow() {
        this.setState({isHeaderVisible:true})
    }

    onHeaderHide() {
        this.setState({isHeaderVisible:false})
    }

    render() {
        return (
            <div className="App">
                {!this.state.isHeaderVisible && <PageMenu isFixed/>}
                <Visibility onBottomPassed={this.onHeaderHide} onBottomVisible={this.onHeaderShow} once={false}>
                    <Segment className="headerSegment" inverted textAlign="center"
                             style={{minHeight: 700, padding: '1em 0'}}>
                        <div className="headerFilter"/>
                        <Container>
                            <PageMenu/>
                        </Container>
                        <Container text>
                            <Header as='h1' content="Строительная бригада" inverted
                                    style={{fontSize: '3em', marginTop: '4em'}}/>
                            <Header as='h2' content="г. Павлово" inverted/>
                            <Header as='h2' inverted style={{marginTop: '2em'}}><Icon
                                name='phone'/>{Contacts.phoneNumber}
                            </Header>
                        </Container>
                    </Segment>
                </Visibility>
                <Segment id="about" style={{margin: '1em 1em'}} textAlign="center" raised>
                    <Header as='h3'>Почему мы?</Header>
                    <Container style={{padding: '8em 0', textAlign:'center'}}>
                        <Statistic color='orange'>
                            <Statistic.Label>более</Statistic.Label>
                            <Statistic.Value>15 лет</Statistic.Value>
                            <Statistic.Label>опыт в строительстве</Statistic.Label>
                        </Statistic>
                        <Statistic color='violet'>
                            <Statistic.Label>высокое</Statistic.Label>
                            <Statistic.Value>качество</Statistic.Value>
                            <Statistic.Label>работ</Statistic.Label>
                        </Statistic>
                        <Statistic color='brown'>
                            <Statistic.Label>цены</Statistic.Label>
                            <Statistic.Value>дешевле</Statistic.Value>
                            <Statistic.Label>чем у конкурентов</Statistic.Label>
                        </Statistic>
                        <Statistic color='purple'>
                            <Statistic.Label>мы рассчитаем</Statistic.Label>
                            <Statistic.Value>бесплатно</Statistic.Value>
                            <Statistic.Label>стоимость строительства</Statistic.Label>
                        </Statistic>
                    </Container>
                </Segment>
                <Segment inverted vertical style={{padding:"5em 0"}}>
                </Segment>
            </div>
        )
    }

    renderOld() {
        return (
            <MediaQuery minWidth={1200}>
                {(matches) => (
                    <div className="App">
                        <Header>
                            {matches && this.renderNavigationMenu('desktop') || undefined}
                        </Header>
                        {!matches && this.renderNavigationMenu('mobile') || undefined}
                        <content>
                            <MuiThemeProvider>
                            <Switch>
                                <Route exact path={'/'} component={HouseBuildingCalculatorPanel}/>
                                <Route path={'/about'} component={HouseBuildingCalculatorPanel}/>
                            </Switch>
                            </MuiThemeProvider>
                        </content>
                    </div>
                )}
            </MediaQuery>
        );
    }
}

export default App;

/*
 <Header>
 <Navigation logo={withRouter(({history}) => <Logo onClick={() => history.push("/")}/>)}>
 <Link to="/">Услуги</Link>
 <Link to="/about">О нас</Link>
 </Navigation>
 </Header>
 <content>
 <Switch>
 <Route exact path={'/'} render={() => "Home"}/>
 <Route path={'/about'} render={() => "About"}/>
 </Switch>
 </content>*/