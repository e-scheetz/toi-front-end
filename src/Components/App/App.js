import React, { Component } from 'react';

// Components
import AppHeader from '../app-header/app-header'
import CardStack from '../card-stack/card-stack'
import DetailedView from '../detailed-view/detailed-view'
// stupid modal... i'd get it working if i had more time. i freaking love modals
// import SingleCardView from '../single-card-view/single-card-view'

import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      products: [],
      detailedView: false
    }
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:4000/api/products')
    const json = await response.json()
    this.setState({...this.state, products: json.products})
  }

  toggleDetailedView(id){
    const product = this.grabProductbyID(id)

    if(product){
      this.setState({
        ...this.state,
        detailedView: product
      })
    }else{
      this.setState({
        ...this.state,
        detailedView: false
      })
    }
  }

  grabProductbyID(id){
    for(let i=0; i < this.state.products.length; i++){
      if(this.state.products[i].id === id){
        return this.state.products[i]
      }
    }
    return null
  }

  render() {
    return (
      <div className="App">
        <div className='container-wrapper'>
          <AppHeader/>
        </div>
        {this.state.detailedView
          ? <DetailedView product={this.state.detailedView}/>
          : <CardStack toggleDetailed={this.toggleDetailedView.bind(this)} products={this.state.products} />
        }
      </div>
    );
  }
}

export default App;
