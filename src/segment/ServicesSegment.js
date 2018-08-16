/**
 * Services Segment
 *
 * Created by Alex Elkin on 31.10.2017.
 */
import './ServicesSegment.css'

import React from 'react'
import PropTypes from 'prop-types'
import {Grid, List, Container, Header, Segment, Card, Icon, Image} from 'semantic-ui-react'

const mapService = (service, key) => (
    <Card key={key}>
        <Image src={service.img}/>
        <Card.Content>
            <Card.Header>{service.label}</Card.Header>
        </Card.Content>
    </Card>
);

class ServicesSegment extends React.Component {

    render() {
        const {services} = this.props;
        return (
            <Segment textAlign='center' raised className="ServicesSegment">
                <Header as='h3'>Наши услуги</Header>
                <Container textAlign="center">
                    <Card.Group>
                        {services && services.map(mapService)}
                    </Card.Group>
                </Container>
            </Segment>
        )
    }
}
ServicesSegment.propTypes = {
    services: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        img: PropTypes.string
    }))
};
export default ServicesSegment;