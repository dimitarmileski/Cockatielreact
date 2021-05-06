import React from 'react'
import {Button, Form, Container} from 'react-bootstrap'


const CustomCocktail = () =>{

    
    return( 
        <Container>
        <Form>
            <Form.Group controlId="CoctailName">
                <Form.Label>Име на коктел</Form.Label>
                <Form.Control type="coctailName" />
            </Form.Group>
            <Form.Group controlId="Alcohol">
                <Form.Label>Алкохол</Form.Label>
                <Form.Control as="select" onChange={(e)=>{console.log(e.target.value)}}>
                    <option>Џин</option>
                    <option>Водка</option>
                    <option>Виски</option>
                    <option>Рум</option>
                    <option>Текила</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="Liqueurs">
                <Form.Label>Ликер</Form.Label>
                <Form.Control as="select" onChange={(e)=>{console.log(e.target.value)}}>
                    <option>Аперол</option>
                    <option>Лимончело</option>
                    <option>Ликер од јагода</option>
                    <option>Кампари</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="Soda">
                <Form.Label>Сок</Form.Label>
                <Form.Control as="select" onChange={(e)=>{console.log(e.target.value)}}>
                    <option>Спрајт</option>
                    <option>џус од ананас</option>
                    <option>сок од лимон</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="Other">
                <Form.Label>Друго</Form.Label>
                <Form.Control as="select" onChange={(e)=>{console.log(e.target.value)}}>
                    <option>Лимон</option>
                    <option>Мраз</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Button variant="primary" type="submit" >Додади</Button>{' '}
            </Form.Group>
        </Form>
        </Container>
        
    )

}
export default CustomCocktail


