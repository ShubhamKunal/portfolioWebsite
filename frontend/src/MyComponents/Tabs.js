import React, { useState } from 'react';

function Tabs({children}) {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    }

    return (
        <div>
            <div>
                {children.map((child, index) => {
                    return React.cloneElement(child, {
                        isActive: index === activeTab,
                        onClick: () => handleTabClick(index),
                    });
                })}
            </div>
            <div>
                {children[activeTab].props.children}
            </div>
        </div>
    );
}

export default Tabs;
