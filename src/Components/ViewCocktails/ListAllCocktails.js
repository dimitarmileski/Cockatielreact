import { useState } from 'react'
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
import InputBase from '@material-ui/core/InputBase'
import axios from 'axios'
import { useAuth0 } from '@auth0/auth0-react'

import GridList from '@material-ui/core/GridList'

import { useAxiosGet } from '../Hooks/httprequest'
import LoginButton from '../Authentication/LoginButton'

const ListAllCocktails = () => {
  const { isAuthenticated } = useAuth0()
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
          style={{ marginTop: '20px' }}
          color='textPrimary'
          gutterBottom
          variant='h4'
          align='center'
        >
          Нај популарни
        </Typography>

        <div>
          <div className='input-container' style={{ marginRight: '-40px' }}>
            <Grid container item xs={12} spacing={3}>
              <div className='input-container'>
                <input type='text' onChange={(e) => setQuery(e.target.value)} />
                <Button onClick={() => setLetter(query)}>Пребарај</Button>

                <Grid container justify='space-evenly'>
                  {request.data.drinks
                    ?.filter((item) => {
                      if (letter == '') {
                        return item
                      } else if (
                        item.strDrink
                          .toLowerCase()
                          .includes(letter.toLowerCase())
                      )
                        return item
                    })

                    .map((item, index) => (
                      <Card
                        style={{
                          width: '18rem',
                          padding: '10px',
                          backgroundColor: '#ecf0f1',
                        }}
                        key={index}
                      >
                        <CardMedia color='primary' img src={item.strDrinkThumb}>
                          <img
                            src={item.strDrinkThumb}
                            width='100'
                            height='100'
                            style={{ marginLeft: '45px' }}
                          />

                          <br />

                          <CardContent
                            justify='space-evenly'
                            style={{ marginRight: '20px' }}
                          >
                            <Typography
                              justify='space-evenly'
                              color='orange'
                              noWrap='false'
                              overflowWrap='break-word'
                              word-break='break-all'
                              fontWeight='bold'
                            >
                              <span style={{ fontWeight: '700' }}>
                                {' '}
                                Име: {item.strDrink}
                              </span>
                            </Typography>

                            <Typography
                              color='orange'
                              noWrap='false'
                              overflowWrap='break-word'
                              word-break='break-all'
                            >
                              <span style={{ fontWeight: '700' }}>
                                {' '}
                                Категорија:{item.strCategory}
                              </span>
                            </Typography>
                            <Typography
                              color='textSecondary'
                              variant='subtitle2'
                              overflowWrap='break-word'
                              word-break='break-all'
                            >
                              <span style={{ fontWeight: '700' }}>
                                Состојки:
                              </span>
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
                              <span style={{ fontWeight: '700' }}>
                                Количина:
                              </span>
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
                          {isAuthenticated ? (
                            <Button
                              variant='warning'
                              style={{
                                marginBottom: '30px',
                                marginLeft: '30px',
                              }}
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
                          ) : (
                            <div>
                              <div>логирајте се за да нарачате</div>
                              <LoginButton />
                            </div>
                          )}
                        </CardMedia>
                      </Card>
                    ))}
                </Grid>
              </div>
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
