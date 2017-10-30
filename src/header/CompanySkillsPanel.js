/**
 * Company Skills Panel
 *
 * Created by Alex Elkin on 22.10.2017.
 */

import Panel from '../panel/Panel'
import './CompanySkillsPanel.css'

import React from 'react';
import PropTypes from 'prop-types'

const CompanySkillsPanel = ({className, title, skills, centerVertically}) => {
    return (
        <Panel className={`CompanySkillsPanel${(className && ' ' + className) || ''}`}
               centerVertically={centerVertically}>
            {title && <label className="title">{title}</label>}
            {skills &&
            skills.map((s, key) =>
                <div className='skill' key={key}>
                    <div className={s.iconClass}/>
                    <label>{s.skill}</label>
                </div>
            )}
        </Panel>
    )
};
CompanySkillsPanel.propTypes = {
    className: PropTypes.string,
    title:PropTypes.string,
    skills:PropTypes.arrayOf(PropTypes.shape({
        skill: PropTypes.string,
        iconClass: PropTypes.string
    })),
    centerVertically : PropTypes.bool
};
export default CompanySkillsPanel;