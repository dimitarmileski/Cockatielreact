import { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import Grid from '@material-ui/core/Grid'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import Link from 'react-router-dom'
import axios from 'axios'

import { useAxiosGet } from '../Hooks/httprequest'

const ListAllCocktails = () => {
  const [letter, setLetter] = useState('a')
  const [query, setQuery] = useState(null)

  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${letter}`

  const request = useAxiosGet(url)

  let order = []

  if (request.loading) {
    return <div>Loading...</div>
  }

  if (request.data) {
    return (
      <Container>
        <Typography
          color='textPrimary'
          gutterBottom
          variant='h4'
          align='center'
        >
          Нај популарни
        </Typography>

        <div>
          <div className='input-container'>
            <input type='text' onChange={(e) => setQuery(e.target.value)} />
            <Button onClick={() => setLetter(query)}>Пребарај</Button>

            <Grid container justify='space-evenly'>
              {request.data.drinks
                ?.filter((item) => {
                  if (letter == '') {
                    return item
                  } else if (
                    item.strDrink.toLowerCase().includes(letter.toLowerCase())
                  )
                    return item
                })

                .map((item, index) => (
                  <Card key={index}>
                    <CardMedia color='primary' img src={item.strDrinkThumb}>
                      <img src={item.strDrinkThumb} width='100' height='100' />

                      <br />

                      <CardContent>
                        <Typography
                          color='primary'
                          noWrap='false'
                          overflowWrap='break-word'
                          word-break='break-all'
                        >
                          Име: {item.strDrink}
                        </Typography>

                        <Typography
                          color='primary'
                          noWrap='false'
                          overflowWrap='break-word'
                          word-break='break-all'
                        >
                          Категорија: {item.strCategory}
                        </Typography>
                        <Typography
                          color='textSecondary'
                          variant='subtitle2'
                          overflowWrap='break-word'
                          word-break='break-all'
                        >
                          <span style={{ fontWeight: '700' }}>Состојки:</span>
                          <br />
                          {` ${item.strIngredient1} `}
                          <br />
                          {` ${item.strIngredient2} `}
                          <br />
                          {` ${item.strIngredient3} `}
                        </Typography>
                        <Typography
                          color='textSecondary'
                          variant='subtitle2'
                          overflowWrap='break-word'
                          word-break='break-all'
                        >
                          <span style={{ fontWeight: '700' }}>Количина:</span>
                          <br />
                          {`${item.strMeasure1}`}
                        </Typography>
                        <Typography
                          color='textSecondary'
                          variant='subtitle2'
                          overflowWrap='break-word'
                          word-break='break-all'
                        >
                          <span style={{ fontWeight: '700' }}>Цена:</span>
                          <br />
                          {item.strDrink.length * 50}
                        </Typography>
                      </CardContent>
                      <Button
                        onClick={() => {
                          order.push({
                            orderName: item.strDrink,
                            orderCat: item.strCategory,
                            dose: item.strMeasure1,
                            price: item.strDrink.length * 50,
                          })

                          axios
                            .post(
                              'https://605b3c3427f0050017c0698d.mockapi.io/ordered',
                              order[0]
                            )
                            .then((m) => alert('Нарачано'))
                            .catch((error) => console.log(error))
                        }}
                      >
                        Нарачај
                      </Button>
                    </CardMedia>
                  </Card>
                ))}
            </Grid>
          </div>
        </div>
      </Container>
    )
  } else {
    return <></>
  }
}

export default ListAllCocktails
