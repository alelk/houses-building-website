/**
 * Site Menu
 *
 * Created by Alex Elkin on 31.10.2017.
 */
import React from 'react';
import PropTypes from 'prop-types'
import {Responsive, Menu, Label, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const renderMenuItems = (menu) => (
    menu.map((item, key) => <Menu.Item as={Link} to={item.link} key={key}>{item.label}</Menu.Item>)
);

const renderMenu = ({menu, fixed, inverted, phoneNumber, vertical}) => {
    return (
        <Menu fixed={fixed ? 'top' : undefined} size='large' inverted={inverted}>
            <Menu.Item><Link to="/"><Icon name="home" to="/" inverted={inverted} size='large'/></Link></Menu.Item>
            <Responsive minWidth={1000}>
                {renderMenuItems(menu)}
            </Responsive>
            <Menu.Item position="right">
                <Label size='large' color='black'><Icon name='phone'/>{phoneNumber}</Label>
            </Menu.Item>
        </Menu>
    )
};

const SiteMenu = (props) => {
    return (
        <div className="SiteMenu">
            <Responsive as={renderMenu} {...props} maxWidth={1000}/>
            <Responsive as={renderMenu} {...props} minWidth={1001}/>
        </div>
    )
};
SiteMenu.propTypes = {
    menu: PropTypes.arrayOf(PropTypes.shape({
        label : PropTypes.string,
        link : PropTypes.string
    })),
    fixed: PropTypes.bool,
    inverted: PropTypes.bool,
    phoneNumber: PropTypes.string
};
export default SiteMenu;
