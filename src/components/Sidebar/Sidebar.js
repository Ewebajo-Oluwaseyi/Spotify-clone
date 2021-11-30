import React from 'react';
import Style from './Sidebar.module.css'
import SidebarOption from './SidebarOption'

function Sidebar() {
    return (
        <div className={Style.sidebar}>
            <img
                className={Style.logo}
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt=""
            />
            <SidebarOption option="Home" icon="fas fa-home"/>
            <SidebarOption option="Search" icon="fas fa-search"/>
            {/*<SidebarOption option="Your Library" icon="fas fa-books"/>*/}
            <br/>
        </div>
    )
}

export default Sidebar
