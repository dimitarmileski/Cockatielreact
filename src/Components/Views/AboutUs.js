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
            src='https://scontent.fskp3-1.fna.fbcdn.net/v/t1.6435-1/p320x320/40820657_10204830065426763_3113985919644860416_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=7206a8&_nc_ohc=PjDNigGAHNYAX-uBY9Y&_nc_ht=scontent.fskp3-1.fna&tp=6&oh=6f1ccea079f7488dfcb03cdb1b6281d4&oe=60B914C6'
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
            src='https://scontent.fskp3-1.fna.fbcdn.net/v/t1.6435-9/162423914_10216816568884896_1189909862800743029_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=8NGVp8R4y1gAX9txCL-&_nc_ht=scontent.fskp3-1.fna&oh=082653d76b8db1c001d5dd12a95687b8&oe=60B9FF58'
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
            src='https://cdn1.vectorstock.com/i/1000x1000/77/10/men-faceless-profile-vector-13567710.jpg'
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
            src='https://scontent.fskp3-1.fna.fbcdn.net/v/t1.6435-9/165383184_2984497921779832_2470023783963924835_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=730e14&_nc_ohc=Bax9rKHvJBsAX8zmdCa&_nc_ht=scontent.fskp3-1.fna&oh=e890810a0f1e1644905e309c7da2640b&oe=60B74A10'
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
            src='https://scontent.fskp3-1.fna.fbcdn.net/v/t31.18172-8/24131781_1929340847081313_4571609350354943009_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=730e14&_nc_ohc=tw-kisdq5LQAX8oaoSM&_nc_ht=scontent.fskp3-1.fna&oh=0513a203b27b3206c8fc5042dce24108&oe=60B6FA37'
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
