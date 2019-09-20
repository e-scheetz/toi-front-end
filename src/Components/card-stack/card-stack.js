import React, { Component } from 'react'
import { Row } from 'react-materialize'
import SingleCard from '../single-card/single-card'


class CardStack extends Component {
  render(){
    const { products } = this.props
    return(
      <div className='container'>
        <Row>
          {products.map((product, idx) => (
            <SingleCard product={product} key={idx} />
          ))}
        </Row>
      </div>
    )
  }
}

export default CardStack