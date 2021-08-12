import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'
import {Link } from 'react-router-dom';

function MenuBar() {

    const [activeItem, setActiveItem] = useState('');

    const handleItemClick = (e, { name }) => setActiveItem(name)

        return (
                <Menu pointing secondary>
                    <Menu.Item
                        name='home'
                        // if activeItem is true, the messages will be highlighted
                        active={activeItem === 'home'}
                        // got rid of this.handleItemClick because it aint a class based component anymore
                        onClick={handleItemClick}
                        // semantic ui has an integeration and has it behave as a different component. We want it to make a link. We need an as={} and to={}
                        as={Link}
                        to={'/'}
                    />
                    <Menu.Menu position='right'>
                        <Menu.Item
                            name='login'
                            active={activeItem === 'login'}
                            onClick={handleItemClick}
                            as={Link}
                            to={'/login'}
                        />
                        <Menu.Item
                            name='register'
                            active={activeItem === 'register'}
                            onClick={handleItemClick}
                            as={Link}
                            to={'/register'}
                        />
                    </Menu.Menu>
                </Menu>
        )
    
}


export default MenuBar;
