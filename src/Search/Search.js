import React, { Component } from 'react';

import './Search.css';

class Search extends Component {
    searchItems = (event) => {
        const { searchList } = this.props;

        searchList(event.target.value);
    }   

    render() {
        return (
            <div className="pt-input-group searchbar">
                <span className="pt-icon pt-icon-search"></span>
                <input 
                    className="pt-input" 
                    type="search" 
                    placeholder="Search Novels" 
                    dir="auto" 
                    onChange={this.searchItems}
                />
            </div>
        );
    }
} 

export default Search;