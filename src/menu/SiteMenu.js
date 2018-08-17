/**
 * Site Menu
 *
 * Created by Alex Elkin on 31.10.2017.
 */
import React from 'react';
import PropTypes from 'prop-types'
import {Button, Menu, Label, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const renderMenuItem = (item, key, onItemSelected) => (
    <Menu.Item as={Link} to={item.link} key={key} onClick={onItemSelected && (() => onItemSelected(item.link, item))}>
        {item.label}
    </Menu.Item>
);

const homeButton = (inverted, homeLink) => (
    <Menu.Item>
        <Link to={homeLink}>
            <Icon name="home" inverted={inverted} size='large'/>
        </Link>
    </Menu.Item>
);

const menuButton = (inverted, onClick) => (
    <Button icon inverted={inverted} basic color='violet' onClick={onClick}>
        <Icon name="content" size='large'/>
    </Button>
);

const phone = (phoneNumber) => (
    <Menu.Item as='a' position="right" href={`tel:${phoneNumber}`}>
        <Label size='large' color='black'><Icon name='phone'/>{phoneNumber}</Label>
    </Menu.Item>
);

const SiteMenu = ({menu, fixed, inverted, phoneNumber, homeLink, onMenuButtonClick, onItemSelected, vertical, style}) => {
    return (
        <Menu fixed={fixed ? 'top' : undefined} size='large' inverted={inverted} vertical={vertical} style={style}>
            {homeLink && homeButton(inverted, homeLink)}
            {onMenuButtonClick && menuButton(inverted, onMenuButtonClick)}
            {menu && menu.map((item, key) => renderMenuItem(item, key, onItemSelected))}
            {phoneNumber && phone(phoneNumber)}
        </Menu>
    )
};
SiteMenu.propTypes = {
    menu: PropTypes.arrayOf(PropTypes.shape({
        label : PropTypes.string,
        link : PropTypes.string
    })),
    vertical: PropTypes.bool,
    fixed: PropTypes.string,
    inverted: PropTypes.bool,
    homeLink: PropTypes.string,
    onMenuButtonClick: PropTypes.func,
    onItemSelected : PropTypes.func,
    phoneNumber: PropTypes.string,
    style: PropTypes.object
};
export default SiteMenu;
