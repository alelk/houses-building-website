/**
 * Footer Segment
 *
 * Created by Alex Elkin on 31.10.2017.
 */

import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {Container, Grid, Header, List, Icon, Segment} from 'semantic-ui-react'

const mapMenuItem = (item, key) => (
    <List.Item as='a' href={item.link} key={key}>{item.label}</List.Item>
);

const FooterSegment = ({menu, companyName, phoneNumber}) => {
    return (
        <Segment className="FooterSegment" inverted vertical style={{padding: "5em 0"}}>
            <Container>
                <Grid divided inverted stackable>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <Header as={Link} to="/" inverted>{companyName}</Header>
                            {menu && <List link inverted>{menu.map(mapMenuItem)}</List>}
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Header as={Link} to="/#contacts" inverted>Контакты</Header>
                            <List link inverted>
                                <List.Item as='a'><Icon name='phone'/>{phoneNumber}</List.Item>
                            </List>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    )
};
FooterSegment.propTypes = {
    companyName : PropTypes.string,
    phoneNumber : PropTypes.string,
    menu: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        link: PropTypes.string
    }))
};
export default FooterSegment;