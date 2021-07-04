import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Card, Button, Row, Col } from 'react-bootstrap'
import StripePayment from '../Payment/StripePayment'
import CustomCart from './CustomCart'

import Axios from 'axios'

const ShoppingCard = () => {
  const url = 'https://605b3c3427f0050017c0698d.mockapi.io/ordered'

  const url2 = 'https://605b3c3427f0050017c0698d.mockapi.io/customcocktails'

  let price = 0

  const [reset, setReset] = useState(0)

  const [res, setData] = useState({
    loading: false,
    data: null,
    error: false,
  })

  const [res1, setData1] = useState({
    loading: false,
    data: null,
    error: false,
  })

  useEffect(() => {
    getUsers()
    getcena()
  }, [url])

  const getcena = async () => {
    setData1({
      loading: true,
      data: null,
      error: false,
    })
    await Axios.get(url2)
      .then((response) =>
        setData1({
          loading: false,
          data: response.data,
          error: false,
        })
      )
      .catch(() => {
        setData1({
          loading: false,
          data: null,
          error: true,
        })
      })
  }

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

  if (res.data && res1.data) {
    return (
      <div>
        <div style={{ color: 'white' }}>
          {res1.data?.map((entry, index) => (price += entry.price))}
        </div>
        <Container>
          <h1 style={{ textAlign: 'center' }}>Кошничка</h1>
          <Row>
            {res.data?.map((entry, index) => (
              <Col key={index}>
                <div style={{ color: 'white' }}> {(price += entry.price)}</div>
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>Име: {entry.orderName}</Card.Title>
                    <Card.Text>
                      <strong>Категорија: {entry.orderCat} </strong>
                    </Card.Text>
                    <Card.Text>
                      <strong>Доза: {entry.dose} </strong>
                    </Card.Text>
                    <Card.Text>
                      <strong>Цена: {entry.price} </strong>
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

          <h2 style={{ textAlign: 'center' }}>Ваши креирани коктели</h2>
          <CustomCart />
          <h3 style={{ textAlign: 'center' }}>
            Сума за плаќање: {parseInt(price)}{' '}
          </h3>

          <StripePayment />
        </Container>
      </div>
    )
  } else {
    return <div></div>
  }
}
export default ShoppingCard
