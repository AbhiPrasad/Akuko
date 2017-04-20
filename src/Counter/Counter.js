import React, { Component } from 'react';

import './Counter.css';

import { EditableText, Button } from '@blueprintjs/core';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            number: this.props.number,
            title: this.props.title,
        }
    }

    addNum = () => {
        const { updateCounter, id } = this.props;

        const { number, title } = this.state;

        const validNum = +number + 1;
        this.setState({ number: validNum });
        updateCounter(title, validNum, id);
    }

    minusNum = () => {
        const { updateCounter, id } = this.props;

        const { number, title } = this.state;
        const validNum = +number - 1;
        if (validNum >= 0) {
            this.setState({ number: validNum });
            updateCounter(title, validNum, id);
        }
    }

    confirmNum = input  => {
        const { updateCounter, id } = this.props;

        const { title } = this.state;

        const num = +input;
        const invalidNum = (isNaN(num));

        if (invalidNum || num < 0) {
            this.setState({ number: '' });
        } else {
            updateCounter(title, input, id);
        }
    }

    allowNumChange = number => {
        this.setState({ number });
    }

    confirmTitle = title => {
        const { updateCounter, id } = this.props;
        const { number } = this.state;

        updateCounter(title, number, id);
    }

    allowTitleChange = title => {
        this.setState({ title });
    }

    deleteItem = () => {
        const { id, deleteCounter } = this.props;

        deleteCounter(id);
    }

    render() {
        const { number, title } = this.state;
        return (
            <div className="counter pt-card">
                <EditableText 
                    minWidth={270}
                    placeholder="Title" 
                    className="titletext"
                    value={title} 
                    onChange={this.allowTitleChange}
                    onConfirm={this.confirmTitle}
                />
                <div className="counter-edit">
                    <Button 
                        onClick={() => this.minusNum()}
                        type="reflexbutton" 
                        iconName="minus" 
                        className="pt-button pt-minimal pt-icon-large" 
                    />
                    <EditableText 
                        placeholder="0" 
                        className="numbertext"
                        onConfirm={this.confirmNum}
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
                    <Button type="button" onClick={() => this.deleteItem()} iconName="trash" className="pt-button pt-minimal" />
                    <Button type="button" iconName="star-empty" className="pt-button pt-minimal" />
                </div>
            </div>
        );
    }
}

export default Counter;