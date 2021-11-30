import React from 'react';
import Style from './SidebarOption.module.css';


function SidebarOption({option, icon}) {
    return (
        <div className={Style.sidebarOption}>
            {icon && <i className={`${icon}`} style={{paddingLeft: '10px', paddingRight: '10px'}}></i>}
            {icon ? <h4>{option}</h4> : <p>{option}</p>}
        </div>
    )
}

export default SidebarOption;