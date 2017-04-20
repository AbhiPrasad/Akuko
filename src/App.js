import React, { Component } from 'react';

import Novel from './Novel/Novel';
import NewButton from './NewButton/NewButton';
import Search from './Search/Search';

import _ from 'lodash';

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
      number: 0,
      title: "",
    });

    localStorage.setItem("list", JSON.stringify(list));

    this.setState({
      list
    });
  }

  updateNovelNumber = (number, index) => {
    const { list } = this.state;

    const oldTitle = list[index].title;

    list.splice(index, 1, {
      number,
      title: oldTitle,
    });

    localStorage.setItem("list", JSON.stringify(list));
  }

  updateNovelTitle = (title, index) => {
    const { list } = this.state;

    const oldNumber = list[index].number;

    list.splice(index, 1, {
      number: oldNumber,
      title,
    });

    localStorage.setItem("list", JSON.stringify(list));
  }

  deleteNovel = (index) => {
    const { list } = this.state;

    console.log(index);

    list.splice(index, 1);

    this.setState({
      list,
    });

    localStorage.setItem("list", JSON.stringify(list));
  }

  searchList = (term) => {
    const { list } = this.state;

    const filteredList = list.filter(item => {
      return item.title.toLowerCase().trim().indexOf(term.toLowerCase().trim()) > -1;
    });

    this.setState({
      filteredList,
    })

    console.log(term);
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
              <Novel
                key={_.uniqueId()}
                index={index}
                number={item.number}
                title={item.title}
                updateNovelNumber={this.updateNovelNumber}
                updateNovelTitle={this.updateNovelTitle}
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
