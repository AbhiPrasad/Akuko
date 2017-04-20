import React, { Component } from 'react';

import Counter from './Counter/Counter';
import NewButton from './NewButton/NewButton';
import Search from './Search/Search';

import _ from 'lodash';
import uuid from 'uuid';

import '../node_modules/@blueprintjs/core/dist/blueprint.css';
import '../node_modules/normalize.css/normalize.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    const list = localStorage.getItem("list") === null ? [] : JSON.parse(localStorage.getItem("list"));

    this.state = {
      list,
      filteredList: list,
    }
  }

  addNewCounter = () => {
    const { list } = this.state;

    list.push({
      id: uuid.v4(),
      number: 0,
      title: "",
    });

    localStorage.setItem("list", JSON.stringify(list));

    this.setState({
      list,
      filteredList: list,
    });
  }

  updateCounter = (title, number, id) => {
    const { list } = this.state;
    const newList = list.map(item => {
      if (item.id === id) {
        return { id, number, title }
      } else {
        return item;
      }
    });

    this.setState({
      list: newList,
      filteredList: newList,
    });

    localStorage.setItem("list", JSON.stringify(newList));
  }

  deleteCounter = (id) => {
    const { list } = this.state;

    const newList = list.filter(item => {
      return item.id !== id;
    });

    this.setState({
      list: newList,
      filteredList: newList,
    });

    localStorage.setItem("list", JSON.stringify(newList));
  }

  searchList = (term) => {
    const { list } = this.state;

    const filteredList = list.filter(item => {
      return item.title.toLowerCase().trim().indexOf(term.toLowerCase().trim()) > -1;
    });

     this.setState({
      filteredList,
    });
  }

  render() {
    const { filteredList } = this.state
    return (
      <div className="app">
        Akuko
        <Search 
          searchList={this.searchList}
        />
        {filteredList.map((item, index) => {
          return (
              <Counter
                key={item.id}
                id={item.id}
                number={item.number}
                title={item.title}
                updateCounter={this.updateCounter}
                deleteCounter={this.deleteCounter}
              />
          );
        })}
        <NewButton 
          onClick={this.addNewCounter}
        />
      </div>
    );
  }
}

export default App;
