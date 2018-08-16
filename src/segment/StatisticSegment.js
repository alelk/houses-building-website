/**
 * Statistic Segment
 *
 * Created by Alex Elkin on 31.10.2017.
 */
import './StatisticSegment.css'

import React from 'react'
import PropTypes from 'prop-types'
import {Container, Header, Icon, Segment, Statistic} from 'semantic-ui-react'

const mapStatistics = (statistic, key) => {
    const {color, topLabel, valueLabel, iconName, bottomLabel} = statistic;
    return (
        <Statistic key={key} color={color || 'black'} className="companyStatistic" size="small">
            {topLabel && <Statistic.Label>{topLabel}</Statistic.Label>}
            <Statistic.Value>
                {iconName && <Icon name={iconName}/>}
                {valueLabel}
            </Statistic.Value>
            {bottomLabel && <Statistic.Label>{bottomLabel}</Statistic.Label>}
        </Statistic>
    )
};

class StatisticSegment extends React.Component {

    render() {
        const {statistics} = this.props;
        return (
            <Segment className="StatisticSegment" raised>
                <Header as='h3'>Преимущества работы с нами</Header>
                <Container>
                    {
                        statistics && statistics.map(mapStatistics)
                    }
                </Container>
            </Segment>
        )
    }
}
StatisticSegment.propTypes = {
    statistics : PropTypes.arrayOf(PropTypes.shape({
        topLabel : PropTypes.string,
        bottomLabel : PropTypes.string,
        valueLabel : PropTypes.string,
        iconName : PropTypes.string,
        color : PropTypes.string
    }))
};
export default StatisticSegment;
