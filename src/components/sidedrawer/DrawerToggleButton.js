import React from 'react'

const DrawerToggleButton = props => (
    <button className="toggle-button" onClick={props.click}>
        <span className="toggle-button_line"></span>
        <span className="toggle-button_line"></span>
        <span className="toggle-button_line"></span>
    </button>
)

export default DrawerToggleButton;