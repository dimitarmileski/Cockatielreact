import { useState, useEffect } from "react";
import { Button, Form, Container, Card, Row, Col } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import Axios from "axios";

const CustomCocktail = () => {
  const { isAuthenticated } = useAuth0();
  const [name, setName] = useState();
  const [alcohol, setAlcohol] = useState();
  const [sok, setSok] = useState();
  const [other, setOther] = useState();
  const [liker, setLiker] = useState();
  const [refresh, setRef] = useState(null);

  let customAlcohols = { Виски: 50, Џин: 60, Водка: 45, Рум: 65, Текила: 30 };
  let customLiker = {
    Аперол: 20,
    Лимончело: 60,
    "ликер од јагода": 45,
    Кампари: 65,
  };
  let customSok = { Спрајт: 20, "џус од ананас": 40, "сок од лимон": 45 };
  let customDrugo = { Лимон: 10, Мраз: 5 };

  const url = "https://605b3c3427f0050017c0698d.mockapi.io/customcocktails";

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

  const handleSubmit = async (e) => {
    let cocktail = {
      alcohol: alcohol,
      sok: sok,
      other: other,
      liker: liker,
      name: name,
      price:
        customAlcohols[alcohol] +
        customLiker[liker] +
        customSok[sok] +
        customDrugo[other],
    };

    Axios.post(
      "https://605b3c3427f0050017c0698d.mockapi.io/customcocktails",
      cocktail
    )
      .then((e) => {
        alert("Додадено во кошничка");
      })
      .catch((error) => console.log(error));

    e.preventDefault();
  };

  return isAuthenticated ? (
    <div>
      <h1 style={{ textAlign: "center" }}>Креирање коктел</h1>
      <Container
        style={{
          background: "#fdcb6e",
          marginTop: "20px",
          marginBottom: "20px",
          padding: "20px",
          borderRadius: "10px",
          width: "50%",
        }}
      >
        <Form
          style={{ background: "#fdcb6e" }}
          onSubmit={(e) => handleSubmit(e)}
        >
          <Form.Group controlId="CoctailName">
            <Form.Label style={{ color: "white" }}>Име на коктел</Form.Label>
            <Form.Control
              required
              type="coctailName"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="Alcohol">
            <Form.Label style={{ color: "white" }}>Алкохол</Form.Label>
            <Form.Control
              required
              as="select"
              onChange={(e) => {
                setAlcohol(e.target.value);
              }}
            >
              <option disabled selected value hidden value="">
                {" "}
                Изберете од понудените{" "}
              </option>
              <option value="Џин">Џин (60 ден.)</option>
              <option value="Водка">Водка (45 ден.)</option>
              <option value="Виски">Виски (50 ден.)</option>
              <option value="Рум">Рум (65 ден.)</option>
              <option value="Текила">Текила (30 ден.)</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="Liqueurs">
            <Form.Label style={{ color: "white" }}>Ликер</Form.Label>
            <Form.Control
              required
              as="select"
              onChange={(e) => {
                setLiker(e.target.value);
              }}
            >
              <option disabled selected value hidden value="">
                {" "}
                Изберете од понудените{" "}
              </option>
              <option value="Аперол">Аперол (20 ден.)</option>
              <option value="Лимончело">Лимончело (60 ден.)</option>
              <option value="ликер од јагода">Ликер од јагода (45 ден.)</option>
              <option value="Кампари">Кампари (65 ден.)</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="Soda">
            <Form.Label style={{ color: "white" }}>Сок</Form.Label>
            <Form.Control
              required
              as="select"
              onChange={(e) => {
                setSok(e.target.value);
              }}
            >
              <option disabled selected value hidden value="">
                {" "}
                Изберете од понудените{" "}
              </option>
              <option value="Спрајт">Спрајт (20 ден.)</option>
              <option value="џус од ананас">џус од ананас (40 ден.)</option>
              <option value="сок од лимон">сок од лимон (45 ден.)</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="Other">
            <Form.Label style={{ color: "white" }}>Друго</Form.Label>
            <Form.Control
              required
              as="select"
              onChange={(e) => {
                setOther(e.target.value);
              }}
            >
              <option disabled selected value hidden value="">
                {" "}
                Изберете од понудените{" "}
              </option>
              <option value="Лимон">Лимон (10 ден.)</option>
              <option value="Мраз">Мраз (5 ден.)</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Button variant="warning" type="submit">
              Додади во кошничка
            </Button>{" "}
          </Form.Group>
        </Form>
      </Container>
    </div>
  ) : (
    <div>Логирајте се да можете да пратите коктел</div>
  );
};
export default CustomCocktail;
