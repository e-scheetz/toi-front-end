import React, { Component } from 'react'
import { Col, Card, Row } from 'react-materialize'

class CardStack extends Component {
  render(){
    const { product } = this.props
    const cardStyle = {
      height: "350px",
    }
    const imgStyle = {
      backgroundImage: 'url(' + product.productImage + ')',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '125px',
      align: 'center',
    }
    return(
      <Col s={12} m={6} l={4} xl={3}>
        <Card style={cardStyle} header={<Row ><Col s={12} m={12} l={12} style={imgStyle}/></Row>} actions={[<a>{product.title}</a>]}>
          <Row />
          <Row />
        </Card>
      </Col>
    )
  }
}

export default CardStack