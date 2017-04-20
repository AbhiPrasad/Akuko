import React, { Component } from 'react';

import Novel from './Novel/Novel';
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

  addNewNovel = () => {
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

  updateNovel = (title, number, id) => {
    console.log(number);
    const { list } = this.state;

    console.log(list);

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

  deleteNovel = (id) => {
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
    console.log(filteredList);
    return (
      <div className="app">
        Akuko
        <Search 
          searchList={this.searchList}
        />
        {filteredList.map((item, index) => {
          return (
              <Novel
                key={item.id}
                id={item.id}
                number={item.number}
                title={item.title}
                updateNovel={this.updateNovel}
                deleteNovel={this.deleteNovel}
              />
          );
        })}
        <NewButton 
          onClick={this.addNewNovel}
        />
      </div>
    );
  }
}

export default App;
