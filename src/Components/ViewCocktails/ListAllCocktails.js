import { useState } from 'react'
import { Card, Button, Spinner } from 'react-bootstrap'
import Grid from '@material-ui/core/Grid'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

import { useAxiosGet } from '../../Components/Hooks/httprequest'

const ListAllCocktails = () => {
  const [letter, setLetter] = useState('a')
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`

  const request = useAxiosGet(url)

  let order = []

  if (request.loading) {
    return <div>Loading...</div>
  }

  if (request.data) {
    return (
      <Container>
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h4"
          align="center"
        >
          Popular Drinks
        </Typography>
        <button onClick={() => setLetter('a')}>a</button>
        <button onClick={() => setLetter('b')}>b</button>
        <button onClick={() => setLetter('c')}>c</button>
        <button onClick={() => setLetter('d')}>d</button>

        <div>
          <Grid container justify="space-evenly">
            {request.data.drinks.map((item, index) => (
              <Card key={index}>
                <CardMedia color="primary" img src={item.strDrinkThumb}>
                  <img src={item.strDrinkThumb} width="100" height="100" />
                  <br />
                  <CardContent>
                    <Typography
                      color="primary"
                      noWrap="false"
                      overflowWrap="break-word"
                      word-break="break-all"
                    >
                      Име: {item.strDrink}
                    </Typography>

                    <Typography
                      color="primary"
                      noWrap="false"
                      overflowWrap="break-word"
                      word-break="break-all"
                    >
                      Категорија: {item.strCategory}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="subtitle2"
                      overflowWrap="break-word"
                      word-break="break-all"
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
                      color="textSecondary"
                      variant="subtitle2"
                      overflowWrap="break-word"
                      word-break="break-all"
                    >
                      <span style={{ fontWeight: '700' }}>Количина:</span>
                      <br />
                      {`${item.strMeasure1}`}
                    </Typography>
                  </CardContent>
                  <Button
                    onClick={() => {
                      order.push({
                        orderName: item.strDrink,
                        orderCat: item.strCategory,
                        dose: item.strMeasure1,
                      })
                      console.log(order)
                    }}
                  >
                    Нарачај
                  </Button>
                </CardMedia>
              </Card>
            ))}
          </Grid>
        </div>
      </Container>
    )
  } else {
    return <></>
  }
}

export default ListAllCocktails