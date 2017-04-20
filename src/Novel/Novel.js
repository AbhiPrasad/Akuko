import React, { Component } from 'react';

import './Novel.css';

import { EditableText, Button } from '@blueprintjs/core';

class Novel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            number: '0',
            title: '',
        }
    }

    addNum = () => {
        const { number } = this.state;
        const validNum = +number + 1;
        this.setState({ number: validNum });
    }

    minusNum = () => {
        const { number } = this.state;
        const validNum = +number - 1;
        if (validNum >= 0) {
            this.setState({ number: validNum });
        }
    }

    validateNum = input  => {
        const num = +input;
        const invalidNum = (isNaN(num));

        if (invalidNum || num < 0) {
            this.setState({ number: '' });
        }
    }

    allowNumChange = number => {
        this.setState({ number });
    }

    allowTitleChange = title => {
        this.setState({ title });
    }

    render() {
        const { number, title } = this.state
        return (
            <div className="novel pt-card">
                <EditableText 
                    minWidth="300px" 
                    placeholder="Novel title" 
                    className="titletext"
                    value={title} 
                    onChange={this.allowTitleChange}
                />
                <div className="novel-edit">
                    <Button 
                        onClick={() => this.minusNum()}
                        type="reflexbutton" 
                        iconName="minus" 
                        className="pt-button pt-minimal pt-icon-large" 
                    />
                    <EditableText 
                        placeholder="0" 
                        className="numbertext"
                        onConfirm={this.validateNum}
                        onChange={this.allowNumChange}
                        maxLength={5}
                        value={number}
                    />
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