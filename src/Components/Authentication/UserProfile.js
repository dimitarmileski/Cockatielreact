import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import CocktailCard from './CocktailCards/CocktailCard'

import { useAxiosGet } from '../Hooks/httprequest'

const UserProfile = () => {
  const { user, isAuthenticated } = useAuth0()

  const req = useAxiosGet('https://605b3c3427f0050017c0698d.mockapi.io/ordered')
  if (req.data) {
    return isAuthenticated ? (
      <Container>
        <Card style={{backgroundColor: '#d35400', color: 'white'}}>
          <Card.Body>
            <Card.Text>
              <div className='row'>
                <img
                  className='rounded-circle'
                  alt='500x500'
                  src={user ? user.picture : null}
                  data-holder-rendered='true'
                />
                <Card.Title style={{fontSize: '50px', fontStyle: 'center', marginTop: '10px', marginLeft: '10px'}}> {user ? user.name : null} </Card.Title>
              </div>
              <div className='col'>

                <hr />
                <div> {user ? user.given_name : null} </div>
                <div> {user ? user.family_name : null} </div>
                <div> {user ? user.email : null} </div>
              </div>
              <hr/>
            </Card.Text>

            <div>
              {' '}
              <b> Последно купени: </b>{' '}
            </div>
            <br/>
            <Row>
              {req.data.map((entry, index) => (
                <Col key={index}>
                  <CocktailCard
                    Title={entry.orderName}
                    Content={entry.orderCat}
                    Color={'#f39c12'}
                  />
                  <br/>
                </Col>
              ))}
            </Row>
          </Card.Body>
        </Card>
      </Container>
    ) : (
      <div>Најавете се да ја видите корисничката сметка</div>
    )
  } else {
    return <></>
  }
}

export default UserProfile
