import React from 'react';

import './NewButton.css';

const NewButton = ({ onClick }) => {
    return (
        <div className="create-btn">
            <button type="button" onClick={onClick} className="pt-button pt-icon-add pt-intent-success">New</button>
        </div>
    );
}

export default NewButton;