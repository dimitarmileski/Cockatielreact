import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Card } from 'react-bootstrap'
import CocktailCard from './CocktailCards/CocktailCard'

const UserProfile = () => {
  const { user, isAuthenticated } = useAuth0()

  return isAuthenticated ? (
    <div>
      {/*{JSON.stringify(user, null, 2)} */}
      <Card>
        <Card.Body>
          <Card.Text>
            <div className='row'>
              <div>
                <img
                  className='rounded-circle'
                  alt='500x500'
                  src={user ? user.picture : null}
                  data-holder-rendered='true'
                />
              </div>
              <div className='col'>
                <Card.Title> {user ? user.name : null} </Card.Title>
                <hr />
                <div> {user ? user.given_name : null} </div>
                <div> {user ? user.family_name : null} </div>
                <div> {user ? user.email : null} </div>
              </div>
            </div>
          </Card.Text>

          <div>
            {' '}
            <b> Recently purchased: </b>{' '}
          </div>
          <div className='row'>
            <CocktailCard
              Title='Mojito'
              Content='Mojito (/moʊˈhiːtoʊ/; Spanish: [moˈxito]) is a traditional Cuban highball. The cocktail often consists of five ingredients: white rum, sugar (traditionally sugar cane juice), lime juice, soda water, and mint.'
            />
            <CocktailCard
              Title='Whiskey Sour'
              Content='This dependable drink is an easy fit for whiskey lovers, as well as those weary of the brown spirit: its lemony lift and slight sweetness make it appealing for citrus lovers, too. The simple recipe calls for whiskey, lemon juice, and sugar'
            />
            <CocktailCard
              Title='Martini'
              Content='The martini is a cocktail made with gin and vermouth, and garnished with an olive or a lemon twist. Over the years, the martini has become one of the best-known mixed alcoholic beverages. H. L. Mencken called the martini the only American invention as perfect as the sonnet and E. B.'
            />
          </div>
        </Card.Body>
      </Card>
    </div>
  ) : (
    <div> Please login </div>
  )
}

export default UserProfile
