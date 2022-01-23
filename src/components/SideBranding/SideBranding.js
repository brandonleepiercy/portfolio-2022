import React from 'react';
import './SideBranding.css';

function SideBranding(props) {

    let { left } = props;

    let { atAbout } = props;

    return (
        <div className={left ? 'side-brand-wrapper left-side' : 'side-brand-wrapper right-side'}>
            <div className={atAbout? 'side-brand-name brand-name-red' : 'side-brand-name brand-name-green'}>
              BRANDON LEE PIERCY
            </div>
            <div className={atAbout? 'side-brand-line brand-line-red' : 'side-brand-line brand-line-green'}>
            </div>
        </div>
    );
}

export default SideBranding;
