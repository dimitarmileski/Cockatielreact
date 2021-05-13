import React from 'react'
import { Carousel, Spinner, Button } from 'react-bootstrap'
import { useAxiosGet } from '../Hooks/httprequest'
import { useAuth0 } from '@auth0/auth0-react'
import pay from '../../images/pay.jpg'
import bird from '../../images/bird.jpg'

const HomePage = () => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`
  const request = useAxiosGet(url)
  let randomDrink = null
  let price = null
  let order = []

  const { isAuthenticated } = useAuth0()

  if (request.error) {
    return <>An error has occured</>
  }

  if (request.data) {
    randomDrink = request.data.drinks[0]

    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={bird}
              alt='Second slide'
              style={{ height: '650px', width: '500px' }}
            />

            <Carousel.Caption
              style={{
                color: 'black',
                fontWeight: '700',
                backgroundColor: ' rgba(255,255,255,0.5)',
              }}
            >
              <h3>Добродојдовте</h3>
              <div>
                Може да нарачате по ваш избор или пак да изберете некој од
                понудените коктели
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className='d-block w-100'
              src={randomDrink.strDrinkThumb}
              alt='First slide'
              style={{ height: '650px', width: '500px' }}
            />
            <Carousel.Caption
              style={{
                color: 'black',
                fontWeight: '700',
                backgroundColor: ' rgba(255,255,255,0.5)',
              }}
            >
              <h2>Наш предлог</h2>
              <h3>{randomDrink.strDrink}</h3>
              <div>Категорија: {randomDrink.strCategory}</div>
              <div>
                Цена: {(price = Math.floor(Math.random() * 500) + 100)} ден
              </div>
              <Button
                onClick={() => {
                  order.push({
                    orderName: randomDrink.strDrink,
                    orderCategory: randomDrink.strCategory,
                    orderPrice: price,
                  })
                  console.log(order)
                }}
              >
                Нарачај одма
              </Button>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className='d-block w-100'
              src={pay}
              alt='Third slide'
              style={{ height: '650px', width: '500px' }}
            />

            <Carousel.Caption
              style={{
                color: 'black',
                fontWeight: '700',
                backgroundColor: ' rgba(255,255,255,0.5)',
              }}
            >
              <h3>Брзо, лесно и сигурно</h3>
              <div></div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    )
  } else {
    return (
      <>
        <Spinner />
      </>
    )
  }
}

export default HomePage
