import React, { Component } from 'react';

import Novel from './Novel/Novel';
import NewButton from './NewButton/NewButton';

import '../node_modules/@blueprintjs/core/dist/blueprint.css';
import '../node_modules/normalize.css/normalize.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    const list = localStorage.getItem("list") === null ? [] : JSON.parse(localStorage.getItem("list"));

    this.state = {
      list,
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

  render() {
    const { list } = this.state
    console.log(list);
    return (
      <div className="app">
        Akuko
        {list.map((item, index) => {
          return (
              <Novel
                key={index}
                number={item.number}
                title={item.title}
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
