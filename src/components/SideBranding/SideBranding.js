import React from 'react';
import './SideBranding.css';

function SideBranding(props) {

    let { left } = props;

    return (
        <div className={left ? 'side-brand-wrapper left-side' : 'side-brand-wrapper right-side'}>
            <div className='side-brand-name'>
              BRANDON LEE PIERCY
            </div>
            <div className='side-brand-line'>
            </div>
        </div>
    );
}

export default SideBranding;
