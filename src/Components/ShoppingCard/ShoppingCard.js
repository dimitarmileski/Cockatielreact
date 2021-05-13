import React from 'react'
import {Container} from 'react-bootstrap'


const ShoppingCard = () =>{

    
    return( 
        <Container>
            <div><h1>Кошничка</h1></div>
            <div className="container-fluid text-center">
                <div className="row">
                    <div className="col-10 col-lg2">
                        <strong></strong>
                    </div>
                    <div className="col-10 col-lg2">
                        <strong>Име на коктел</strong>
                    </div>
                    <div className="col-10 col-lg2">
                        <strong>Количина</strong>
                    </div>
                    <div className="col-10 col-lg2">
                        <strong>Цена</strong>
                    </div>
                </div>
            </div>
            <ListGroup horizontal>
                <ListGroup.Item> </ListGroup.Item>
                <ListGroup.Item> </ListGroup.Item>
                <ListGroup.Item> </ListGroup.Item>
                <ListGroup.Item> </ListGroup.Item>
            </ListGroup>
        </Container>
    )

}
export default ShoppingCard


