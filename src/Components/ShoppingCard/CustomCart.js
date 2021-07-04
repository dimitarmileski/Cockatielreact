import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Card, Button, Row, Col } from "react-bootstrap";
import Axios from "axios";

const CustomCart = () => {
  const url = "https://605b3c3427f0050017c0698d.mockapi.io/customcocktails";

  let price = 0;

  const [res, setData] = useState({
    loading: false,
    data: null,
    error: false,
  });

  useEffect(() => {
    getUsers();
  }, [url]);

  const getUsers = async () => {
    setData({
      loading: true,
      data: null,
      error: false,
    });
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
        });
      });
  };

  if (res.data) {
    return (
      <div>
        <Container>
          <Row>
            {res.data?.map((entry, index) => (
              <Col key={index}>
                <div style={{ color: "white" }}> {(price += entry.price)}</div>
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>Име: {entry.name}</Card.Title>
                    <Card.Text>
                      <strong>Алкохол: {entry.alcohol} </strong>
                    </Card.Text>
                    <Card.Text>
                      <strong>Ликер: {entry.liker} </strong>
                    </Card.Text>
                    <Card.Text>
                      <strong>Сок: {entry.sok} </strong>
                    </Card.Text>
                    <Card.Text>
                      <strong>Друго: {entry.other} </strong>
                    </Card.Text>
                    <Button
                      variant="warning"
                      onClick={() => {
                        const newData = res.data.filter(
                          (note) => note.id !== entry.id
                        );
                        setData({
                          loading: false,
                          data: newData,
                          error: false,
                        });
                        Axios.delete(
                          `https://605b3c3427f0050017c0698d.mockapi.io/customcocktails/${entry.id}`
                        )
                          .then(() => {
                            alert(`Тргнато од кошничка ${entry.name}`);
                            window.location.reload(false);
                          })
                          .catch((e) => console.log(e));
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
        </Container>
      </div>
    );
  } else {
    return <div></div>;
  }
};
export default CustomCart;
