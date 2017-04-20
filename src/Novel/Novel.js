import React, { Component } from 'react';

import './Novel.css';

import { EditableText, Button } from '@blueprintjs/core';

class Novel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            number: this.props.number,
            title: this.props.title,
        }
    }

    addNum = () => {
        const { updateNovelNumber, index } = this.props;

        const { number } = this.state;
        const validNum = +number + 1;
        this.setState({ number: validNum });
        updateNovelNumber(validNum, index);
    }

    minusNum = () => {
        const { updateNovelNumber, index } = this.props;

        const { number } = this.state;
        const validNum = +number - 1;
        if (validNum >= 0) {
            this.setState({ number: validNum });
            updateNovelNumber(validNum, index);
        }
    }

    confirmNum = input  => {
        const { updateNovelNumber, index } = this.props;

        const num = +input;
        const invalidNum = (isNaN(num));

        if (invalidNum || num < 0) {
            this.setState({ number: '' });
        } else {
            updateNovelNumber(input, index);
        }
    }

    allowNumChange = number => {
        this.setState({ number });
    }

    confirmTitle = title => {
        const { updateNovelTitle, index } = this.props;

        updateNovelTitle(title, index);
    }

    allowTitleChange = title => {
        this.setState({ title });
    }

    deleteItem = () => {
        const { index, deleteNovel } = this.props;

        deleteNovel(index);
    }

    render() {
        const { number, title } = this.state;
        return (
            <div className="novel pt-card">
                <EditableText 
                    minWidth={270}
                    placeholder="Novel title" 
                    className="titletext"
                    value={title} 
                    onChange={this.allowTitleChange}
                    onConfirm={this.confirmTitle}
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

export default Novel;