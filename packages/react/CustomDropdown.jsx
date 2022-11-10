import React from 'react';
import '@kvib/css/main.css'

function CustomDropdown() {

    return (
        <select className="dropdown" id="dropdown">
            <option selected>Hjelpetekst</option>
            <option value="1">Første alternativ</option>
            <option value="2">Andre alternativ</option>
            <option value="3">Tredje alternativ</option>
        </select>
    );
}

export default CustomDropdown;