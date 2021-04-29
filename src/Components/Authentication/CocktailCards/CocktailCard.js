import React from 'react'
import {Card,Button} from 'react-bootstrap'

const CocktailCard = (
    {Title,Content}
) => {

    return (

        <div>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>{Title}</Card.Title>
            <Card.Text>
                {Content}
            </Card.Text>
            <Button variant="danger" >Go</Button>
        </Card.Body>
        </Card>
        </div>
    )
}

export default CocktailCard
