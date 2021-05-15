import React from 'react'
import Preset from './Preset/Preset'
import './PresetsSidebar.scss'

const PresetsSidebar = () => {
    return (
        <aside className="presets-sidebar p-p-2">
            <h3>Presets</h3>
            <ul className="presets-list">
                <li>
                    <Preset />
                </li>
                <li>
                    <Preset />
                </li>
                <li>
                    <Preset />
                </li>
                <li>
                    <Preset />
                </li>
            </ul>
        </aside>
    )
}

export default PresetsSidebar
