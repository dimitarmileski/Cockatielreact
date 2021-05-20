import { useState } from 'react'
import { Button, Form, Container } from 'react-bootstrap'
import { useAuth0 } from '@auth0/auth0-react'
import axios from 'axios'

const CustomCocktail = () => {
  const { isAuthenticated } = useAuth0()
  const [name, setName] = useState()
  const [alcohol, setAlcohol] = useState()
  const [sok, setSok] = useState()
  const [other, setOther] = useState()
  const [liker, setLiker] = useState()

  const handleSubmit = async (e) => {
    let cocktail = {
      alcohol: alcohol,
      sok: sok,
      other: other,
      liker: liker,
      name: name,
    }
    axios
      .post(
        'https://605b3c3427f0050017c0698d.mockapi.io/customcocktails',
        cocktail
      )
      .then((e) => alert('Успешно направен коктел'))
      .catch((error) => console.log(error))

    e.preventDefault()
  }

  return isAuthenticated ? (
    <div><h1 style={{textAlign:"center"}}>Креирање коктел</h1>
    <Container  style={{background:"#fdcb6e", marginTop:"20px", marginBottom:"20px", padding:"20px", borderRadius:"10px", width:"50%"}}>
      <Form style={{background:"#fdcb6e"}} onSubmit={(e) => handleSubmit(e)}>
        <Form.Group controlId='CoctailName'>
          <Form.Label style={{color:"white"}}>Име на коктел</Form.Label>
          <Form.Control
            required
            type='coctailName'
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId='Alcohol'>
          <Form.Label style={{color:"white"}}>Алкохол</Form.Label>
          <Form.Control
            required
            as='select'
            onChange={(e) => {
              setAlcohol(e.target.value)
            }}
          >
            <option>Џин</option>
            <option>Водка</option>
            <option>Виски</option>
            <option>Рум</option>
            <option>Текила</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId='Liqueurs'>
          <Form.Label style={{color:"white"}}>Ликер</Form.Label>
          <Form.Control
            required
            as='select'
            onChange={(e) => {
              setLiker(e.target.value)
            }}
          >
            <option>Аперол</option>
            <option>Лимончело</option>
            <option>Ликер од јагода</option>
            <option>Кампари</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId='Soda'>
          <Form.Label style={{color:"white"}}>Сок</Form.Label>
          <Form.Control
            required
            as='select'
            onChange={(e) => {
              setSok(e.target.value)
            }}
          >
            <option>Спрајт</option>
            <option>џус од ананас</option>
            <option>сок од лимон</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId='Other'>
          <Form.Label style={{color:"white"}}>Друго</Form.Label>
          <Form.Control
            required
            as='select'
            onChange={(e) => {
              setOther(e.target.value)
            }}
          >
            <option>Лимон</option>
            <option>Мраз</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Button variant='warning' type='submit'>
            Додади
          </Button>{' '}
        </Form.Group>
      </Form>
    </Container>
    </div>
  ) : (
    <div>Логирајте се да можете да пратите коктел</div>
  )
}
export default 
