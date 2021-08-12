import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'

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
                    />
                    <Menu.Item
                        name='home'
                        // if activeItem is true, the messages will be highlighted
                        active={activeItem === 'home'}
                        // got rid of this.handleItemClick because it aint a class based component anymore
                        onClick={handleItemClick}
                    />
                    <Menu.Menu position='right'>
                        <Menu.Item
                            name='login'
                            active={activeItem === 'login'}
                            onClick={handleItemClick}
                        />
                        <Menu.Item
                            name='register'
                            active={activeItem === 'register'}
                            onClick={handleItemClick}
                        />
                    </Menu.Menu>
                </Menu>
        )
    
}


export default MenuBar;
