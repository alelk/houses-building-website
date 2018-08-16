/**
 * Header Segment
 *
 * Created by Alex Elkin on 31.10.2017.
 */
import './HeaderSegment.css'

import React from 'react'
import PropTypes from 'prop-types'
import {Container, Visibility, Header, Icon, Segment} from 'semantic-ui-react'

class HeaderSegment extends React.Component {

    render() {
        const {menu, companyName, companyLocation, phoneNumber, onHeaderVisible, onHeaderHide} = this.props;
        return (
            <Segment className="HeaderSegment" inverted textAlign="center"
                     style={{minHeight: 700, padding: '1em 0'}}>
                <div className="headerFilter"/>
                <Visibility onBottomPassed={onHeaderHide} onBottomVisible={onHeaderVisible} once={false}>
                    {menu && <Container>{menu}</Container>}
                    <Container text>
                        <Header as='h1' content={companyName} inverted style={{fontSize: '3em', marginTop: '4em'}}/>
                        <Header as='h2' content={companyLocation} inverted/>
                        <Header as='h2' inverted style={{marginTop: '2em'}}>
                            <Icon name='phone'/>{phoneNumber}
                        </Header>
                    </Container>
                </Visibility>
            </Segment>
        )
    }
}
HeaderSegment.propTypes = {
    menu : PropTypes.object,
    companyName : PropTypes.string,
    companyLocation : PropTypes.string,
    phoneNumber : PropTypes.string,
    onHeaderVisible: PropTypes.func,
    onHeaderHide: PropTypes.func
};
export default HeaderSegment;
