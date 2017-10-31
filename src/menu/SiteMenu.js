/**
 * Site Menu
 *
 * Created by Alex Elkin on 31.10.2017.
 */
import React from 'react';
import PropTypes from 'prop-types'
import {Responsive, Button, Menu, Label, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const renderMenuItems = (menu) => (
    menu.map((item, key) => <Menu.Item as={Link} to={item.link} key={key}>{item.label}</Menu.Item>)
);

const homeLink = (inverted) => (
    <Menu.Item>
        <Link to="/">
            <Icon name="home" inverted={inverted} size='large'/>
        </Link>
    </Menu.Item>
);

const menuButton = (inverted) => (
    <Button icon inverted={inverted} basic color='violet'>
        <Icon name="content" size='large'/>
    </Button>
);

const SideBar = ({}) => {

}

const renderMenu = ({menu, fixed, inverted, phoneNumber, mobile}) => {
    return (
        <Menu fixed={fixed ? 'top' : undefined} size='large' inverted={inverted}>
            {!mobile && homeLink(inverted)}
            {!mobile && renderMenuItems(menu)}
            {mobile && menuButton(inverted)}
            <Menu.Item position="right">
                <Label size='large' color='black'><Icon name='phone'/>{phoneNumber}</Label>
            </Menu.Item>
        </Menu>
    )
};

class SiteMenu extends React.Component {

    render() {
        return (
            <div className="SiteMenu">
                <Responsive as={renderMenu} {...props} maxWidth={1000} mobile/>
                <Responsive as={renderMenu} {...props} minWidth={1001}/>
            </div>
        )
    }
}

const SiteMenu = (props) => {
    return (
        <div className="SiteMenu">
            <Responsive as={renderMenu} {...props} maxWidth={1000} mobile/>
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
