/**
 * Side Navigation
 *
 * Created by Alex Elkin on 01.11.2017.
 */
import SiteMenu from './SiteMenu'

import React from 'react';
import PropTypes from 'prop-types'
import {Responsive, Button, Sidebar, Label, Icon, Segment} from 'semantic-ui-react'

const SideNavigation = ({
                            visible, inverted, menu, children,
                            onItemSelected, sidebarStyle, sidebarProps
}) => (
    <Sidebar.Pushable as={Segment} style={{margin:"0"}}>
        <Sidebar animation="overlay" width="thin" visible={visible} inverted={inverted}>
            <SiteMenu menu={menu} inverted={inverted} vertical
                      onItemSelected={onItemSelected} style={sidebarStyle} {...sidebarProps}/>
        </Sidebar>
        <Sidebar.Pusher>
            {children}
        </Sidebar.Pusher>
    </Sidebar.Pushable>
);
SideNavigation.propTypes = {
    visible : PropTypes.bool,
    inverted : PropTypes.bool,
    onItemSelected : PropTypes.func,
    sidebarStyle : PropTypes.object,
    sidebarProps : PropTypes.object,
    menu: PropTypes.arrayOf(PropTypes.shape({
        label : PropTypes.string,
        link : PropTypes.string
    })),
};
export default SideNavigation;
