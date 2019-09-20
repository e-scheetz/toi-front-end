import React, { Component } from 'react';

import AppHeader from '../app-header/app-header'
import CardStack from '../card-stack/card-stack'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      products: [],
      filteredProducts: []
    }
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:4000/api/products')
    const json = await response.json()
    this.setState({products: json.products, filteredProducts: json.products})
  }

  render() {
    return (
      <div className="App">
        <div className='container-wrapper'>
          <AppHeader/>
        </div>
        <CardStack products={this.state.filteredProducts} />
        {/* <CustomNav filterReset={this.filterReset.bind(this)} filtering={this.filtering.bind(this)} books={this.state.books}/>
        <BooksList addRemoveCart={this.addRemoveCart.bind(this)} books={this.state.filteredBooks}></BooksList> */}
      </div>
    );
  }
}

export default App;
