import React from 'react'
//import {Switch, Route} from 'react-router-dom'
//import { BrowserRouter as Route, Switch } from "react-router-dom"
//import LoginButton from '../Authentication/LoginButton'

const AboutUs = () => {
  const googleMap = {
    map_responsive: {
      overflow: 'hidden',
      position: 'relative',
      height: '0',
    },
    map_responsive_iframe: {
      left: '0',
      top: '0',
      height: '100%',
      width: '100%',
      position: 'absolute',
    },
  }
  return (
    <div>
      <h2 class='text-center'>За нас</h2>
      <div class='card-group mb-5'>
        <div class='card'>
          <img
            class='card-img-top'
            style={{ height: '65%' }}
            src='https://scontent-sof1-1.xx.fbcdn.net/v/t1.6435-9/40820657_10204830065426763_3113985919644860416_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=lbLih6R6NfQAX9Nb45I&_nc_ht=scontent-sof1-1.xx&oh=3378c0f26a0785ce443fb8ee1d405c74&oe=60E7DE1F'
            alt='Card image cap'
          />
          <div class='card-body'>
            <h5 class='card-title'>Милош Спасовски</h5>
            <p class='card-text'> React Developer, Backend developer</p>
          </div>
        </div>
        <div class='card'>
          <img
            class='card-img-top'
            style={{ height: '65%' }}
            src='https://avatars.githubusercontent.com/u/35492418?v=4'
            alt='Card image cap'
          />
          <div class='card-body'>
            <h5 class='card-title'>Димитар Милески</h5>
            <p class='card-text'> React Developer, Backend developer</p>
          </div>
        </div>
        <div class='card'>
          <img
            class='card-img-top'
            style={{ height: '65%' }}
            src='https://avatars.githubusercontent.com/u/81702296?v=4'
            alt='Card image cap'
          />
          <div class='card-body'>
            <h5 class='card-title'>Давид Димитриевски</h5>
            <p class='card-text'> Web Designer</p>
          </div>
        </div>
        <div class='card'>
          <img
            class='card-img-top'
            style={{ height: '65%' }}
            src='https://avatars.githubusercontent.com/u/81702296?v=4'
            alt='Card image cap'
          />
          <div class='card-body'>
            <h5 class='card-title'>Тамара Илиева</h5>
            <p class='card-text'> QA, Full stack developer</p>
          </div>
        </div>
        <div class='card'>
          <img
            class='card-img-top'
            style={{ height: '65%' }}
            src='https://avatars.githubusercontent.com/u/81702296?v=4'
            alt='Card image cap'
          />
          <div class='card-body'>
            <h5 class='card-title'>Викторија Голужа</h5>
            <p class='card-text'>React Developer, Web Designer</p>
          </div>
        </div>
        <div class='card'>
          <img
            class='card-img-top'
            style={{ height: '65%' }}
            src='https://images-ext-2.discordapp.net/external/Lo8QIJCny02tlCBSBXLPmCCFUQO6HfLxgL-ZnHinEdU/%3Fe%3D1625702400%26v%3Dbeta%26t%3DfodUAd-3xKLWh8qA5JD3_87W6FtvOOCuKhV0gPtJ3LI/https/media-exp1.licdn.com/dms/image/C4D03AQGFCnXWkIRxyA/profile-displayphoto-shrink_800_800/0/1588779698112?width=670&height=670'
            alt='Card image cap'
          />
          <div class='card-body'>
            <h5 class='card-title'>Маргарита Манева</h5>
            <p class='card-text'> React Developer</p>
          </div>
        </div>
      </div>

      <h2 class='text-center'>Контакт</h2>
      <div class='container mb-5'>
        <div class='row'>
          <div class='col-sm-10 col-sm-offset-1'>
            <div class='well'>
              <form>
                <div class='row'>
                  <div class='col-sm-4'>
                    <div class='form-group'>
                      <label for='fname'>Име</label>
                      <input type='text' name='fname' class='form-control' />
                    </div>
                    <div class='form-group'>
                      <label for='lname'>Презиме</label>
                      <input type='text' name='lname' class='form-control' />
                    </div>
                    <div class='form-group'>
                      <label for='email'>Е-маил</label>
                      <input type='text' name='email' class='form-control' />
                    </div>
                    <div class='form-group'>
                      <label for='subject'>Предмет</label>
                      <select name='subject' class='form-control'>
                        <option>Општо прашање</option>
                        <option>Препорака</option>
                        <option>Поддршка за производ</option>
                      </select>
                    </div>
                  </div>
                  <div class='col-sm-8'>
                    <div class='form-group'>
                      <label for='message'>Порака</label>
                      <textarea
                        class='form-control'
                        name='message'
                        rows='10'
                      ></textarea>
                    </div>
                    <div class='text-right'>
                      <input
                        type='submit'
                        class='btn btn-warning'
                        value='Прати'
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class={googleMap.map_responsive}>
        <div class={googleMap.map_responsive_iframe}>
          <iframe
            src='https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Faculty+of+Computer+Science+Engineering+Skopje'
            width='100%'
            height='450'
            frameborder='0'
            style={{ border: '0' }}
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
