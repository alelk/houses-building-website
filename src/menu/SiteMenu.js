/**
 * Site Menu
 *
 * Created by Alex Elkin on 31.10.2017.
 */
import React from 'react';
import PropTypes from 'prop-types'
import {Menu, Label, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const SiteMenu = ({menu, fixed, inverted, phoneNumber}) => {
    return (
        <Menu fixed={fixed ? 'top' : undefined} size='large' inverted={inverted}>
            <Menu.Item><Link to="/"><Icon name="home" to="/" inverted={inverted} size='large'/></Link></Menu.Item>
            { menu && menu.map((item, key) =>
                <Menu.Item as={Link} to={item.link} key={key}>{item.label}</Menu.Item>)
            }
            <Menu.Item position="right">
                <Label size='large' color='black'><Icon name='phone'/>{phoneNumber}</Label>
            </Menu.Item>
        </Menu>
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
