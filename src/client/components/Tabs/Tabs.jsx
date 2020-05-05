import React, { useState } from 'react';
import Styles from './Tabs.module.scss';
import classnames from 'classnames';

const Tabs = ({ tabs }) => {
    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <div className={Styles.container}>
            <div>
                {tabs.map((tab, index) => (
                    <button
                        key={tab.id}
                        id={tab.id}
                        className={classnames(Styles.tab, {[Styles.tabActive]: index === selectedTab})}
                        onClick={() => setSelectedTab(index)}
                        isSelected={index === selectedTab}
                        aria-controls={`panel-${tab}`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className={Styles.content}>
                {tabs[selectedTab].content}
            </div>
        </div>
    );
}

export default Tabs;
