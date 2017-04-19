import React, { Component } from 'react';

import './Novel.css';

import { EditableText, Button } from '@blueprintjs/core'

class Novel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            number: '0',
            title: '',
        }

        this.addNum = this.addNum.bind(this);
        this.minusNum = this.minusNum.bind(this);
    }

    addNum() {
        console.log('wow');
        
    }

    minusNum() {
        console.log('whoa');
    }

    render() {
        const { number, title } = this.state
        return (
            <div className="novel pt-card">
                <EditableText minWidth="270px" placeholder="Novel title" className="titletext" />
                <div className="novel-edit">
                    <Button 
                        onClick={() => this.minusNum()}
                        type="reflexbutton" 
                        iconName="minus" 
                        className="pt-button pt-minimal pt-icon-large" 
                    />
                    <EditableText placeholder="0" className="numbertext" />
                    <Button 
                        onClick={() => this.addNum()}
                        type="button" 
                        iconName="plus" 
                        className="pt-button pt-minimal pt-icon-large"  
                    />
                </div>
                <div className="icon-footer">
                    <Button type="button" iconName="trash" className="pt-button pt-minimal" />
                    <Button type="button" iconName="star-empty" className="pt-button pt-minimal" />
                </div>
            </div>
        );
    }
}

export default Novel;