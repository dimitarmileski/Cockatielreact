import React from 'react'
import { Container, Card, Button, Row, Col } from 'react-bootstrap'
import { useAxiosGet } from '../Hooks/httprequest'

const ShoppingCard = () => {
  const req = useAxiosGet('https://605b3c3427f0050017c0698d.mockapi.io/ordered')

  
  if (req.data) {
    return (
      <Container>
        <h1 style={{ textAlign: 'center' }}>Кошничка</h1>
        <Row>
        {req.data.map((entry, index) => (
          <Container key={index}>
            <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Име: {entry.orderName}</Card.Title>
                <Card.Text>
                  <strong>Категорија: {entry.orderCat} </strong>
                </Card.Text>
                <Card.Text>
                  <strong>Доза: {entry.dose} </strong>
                </Card.Text>
                <Button variant='warning'>Remove</Button>
              </Card.Body>
            </Card>
            </Col>
            <br />
          </Container>
        ))}
        </Row>
      </Container>
    )
  } else {
    return <div></div>
  }
}
export default ShoppingCard
