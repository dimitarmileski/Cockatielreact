
import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Card, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import axios from 'axios'


const ShoppingCard = () => {
  const url = 'https://605b3c3427f0050017c0698d.mockapi.io/ordered'


  const [res, setData] = useState({
    loading: false,
    data: null,
    error: false,
  })

  useEffect(() => {
    getUsers()
  }, [url])

  const getUsers = async () => {
    setData({
      loading: true,
      data: null,
      error: false,
    })
    await Axios.get(url)
      .then((response) =>
        setData({
          loading: false,
          data: response.data,
          error: false,
        })
      )
      .catch(() => {
        setData({
          loading: false,
          data: null,
          error: true,
        })
      })
  }

  if (res.data) {
    return (
      <Container>
        <h1 style={{ textAlign: 'center' }}>Кошничка</h1>

        <Row>
          {res.data?.map((entry, index) => (
            <Col key={index}>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Име: {entry.orderName}</Card.Title>
                  <Card.Text>
                    <strong>Категорија: {entry.orderCat} </strong>
                  </Card.Text>
                  <Card.Text>
                    <strong>Доза: {entry.dose} </strong>
                  </Card.Text>
                  <Button
                    variant='warning'
                    onClick={() => {
                      const newData = res.data.filter(
                        (note) => note.id !== entry.id
                      )
                      setData({
                        loading: false,
                        data: newData,
                        error: false,
                      })
                      Axios.delete(
                        `https://605b3c3427f0050017c0698d.mockapi.io/ordered/${entry.id}`
                      )
                        .then(() =>
                          alert(`Тргнато од кошничка ${entry.orderName}`)
                        )
                        .catch((e) => console.log(e))
                    }}
                  >
                    Remove
                  </Button>
                </Card.Body>
              </Card>
              <br />
            </Col>
          ))}
        </Row>
       <Link to='/StripePayment'>Плати</Link>
      </Container>
    )
  } else {
    return <div></div>
  }
}
export default ShoppingCard
