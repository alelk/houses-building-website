/**
 * Services Segment
 *
 * Created by Alex Elkin on 31.10.2017.
 */

import React from 'react'
import PropTypes from 'prop-types'
import {Grid, List, Header, Segment} from 'semantic-ui-react'

const mapService = (service, key) => (
    <List.Item key={key}>{service.label}</List.Item>
);

const ServicesSegment = ({services}) => {
    return (
        <Segment style={{margin: '1em 1em'}} textAlign='center' raised>
            <Header as='h3'>Наши услуги</Header>
            <Grid container stackable verticalAlign='middle' style={{padding: '8em 0'}}>
                <Grid.Row>
                    <Grid.Column width={8} textAlign='left'>
                        {services && <List size='huge'>{services.map(mapService)}</List>}
                    </Grid.Column>
                    <Grid.Column width={6}>

                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
};
ServicesSegment.propTypes = {
    services: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string
    }))
};
export default ServicesSegment;