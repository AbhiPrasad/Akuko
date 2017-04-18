import React, { Component } from 'react';

import './Novel.css';

import { EditableText, Button } from '@blueprintjs/core'

class Novel extends Component {
    render() {
        return (
            <div className="novel pt-card">
                <EditableText minWidth="100px" placeholder="Novel title" className="titletext" />
                <div className="novel-edit">
                    <Button type="reflexbutton" className="pt-button pt-minimal pt-icon-minus" />
                    <EditableText placeholder="0" className="numbertext" />
                    <Button type="button" className="pt-button pt-minimal pt-icon-plus" />
                </div>
                <div className="icon-footer">
                    <Button type="button" className="pt-button pt-minimal pt-icon-trash" />
                    <Button type="button" className="pt-button pt-minimal pt-icon-star-empty" />
                </div>
            </div>
        );
    }
}

export default Novel;