import React, { useState } from 'react';
import "./styel.scss";

const SwitchTabs = ({ data, onTabChange }) => {
    const [selectTab, setSelectTab] = useState(0);
    const [left, setLeft] = useState(0);

    return (
        <div className='switchingTabs'>
            <div className="tabItems">
                {data.map((tab, index) => {
                    <span key={index} className={`tabItem`}></span>
                })}
                <span className='movingBg' style={left}></span>
            </div>
        </div>
    )
}

export default SwitchTabs