import React from "react";
import './dropdown-menu.css'


function Dropdownmenu(props) {

    return (
        <div className={'dropdow-menu '}>

            <div className="dropdown">
                
                <button className="dropbtn">{props.navitem.label}</button>

                {props.navitem.children.length > 0 ? <div class="dropdown-content">
                    {props.navitem.children.map(e =>
                        <a href={e.link}> {e.label} </a>
                    )
                    }
                </div> : null}

            </div>
        </div>
    )                                          
}

export default Dropdownmenu;