import React from 'react'
import { Card, Button } from 'react-bootstrap'

const CocktailCard = ({ Title, Content }) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Име: {Title}</Card.Title>
          <Card.Text>Категорија: {Content}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CocktailCard
