import React from 'react'
import { Container } from 'react-bootstrap'
import { useAxiosGet } from '../Hooks/httprequest'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ShoppingCard = () => {
  const req = useAxiosGet('https://605b3c3427f0050017c0698d.mockapi.io/ordered')

  if (req.data) {
    return (
      <Container>
        <h1 style={{ textAlign: 'center' }}>Кошничка</h1>
        {req.data.map((entry, index) => (
          <Container key={index}>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Име: {entry.orderName}</Card.Title>
                <Card.Text>
                  <strong>Категорија: {entry.orderCat} </strong>
                </Card.Text>
                <Card.Text>
                  <strong>Доза: {entry.dose} </strong>
                </Card.Text>
                <Button variant='primary'>Remove</Button>
              </Card.Body>
            </Card>
            <br />
          </Container>
        ))}
        <Link to='/StripePayment'>Плати</Link>
      </Container>
    )
  } else {
    return <div></div>
  }
}
export default ShoppingCard
