import React from 'react';
import SettingsSection from "../sections/SettingsSection";
import SessionInfoSection from "../sections/SessionInfoSection";
import ManageIssuesSection from "../sections/ManageIssuesSection";

const RightSideContainer = () => {
    return (
        <section className="right-side-container">
            <SettingsSection/>
            <SessionInfoSection/>
            <ManageIssuesSection/>
        </section>
    );
};

export default RightSideContainer;