import React, {Component} from 'react'
import { Row, Col } from 'react-materialize'

class DetailedView extends Component {
  render(){
    const {product} = this.props
    const imgStyles = {
      maxWidth: '400px',
      maxHeight: '400px',
    }
    return(
      <div>
        <Row>
          <Col>
            <img src={product.productImage} style={imgStyles} alt="" />
          </Col>
          <Col>
            <Row>
              <h3>{product.title}</h3>
            </Row>
            <Row>
              <h5>{product.description}</h5>
            </Row>
          </Col>
          
        </Row>
        <Row>
          <Col><h4>${product.price}</h4></Col>
          <Col s={8} m={8} l={8}/>
          <Col><h4>{product.likes} Likes</h4></Col> 
        </Row>
      </div>
    )
  }
}

export default DetailedView