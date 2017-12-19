import React, { Component } from 'react';
import './styles.sass';
import Item from '../Item/index';

class Homepage extends Component {
  componentDidMount() {
    document.body.scrollTop = 0;
    document.querySelector('.menu').classList.remove('open');
  }
  render() {
    return (
      <main className="main">
        {"1234".split("").map((e, i) => <Item name={e} key={i} />)}
      </main>
    );
  }
}

export default Homepage;
