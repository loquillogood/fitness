/* const element = document.createElement('h1')
element.innerText= 'Hola React'
const container= document.getElementById('root')
container.appendChild(element) */

import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.css'

/*
function getName(user){
  return `${user.firstName.concat(' ',user.lastName)}`

}

function getGreeting(user){
  if(user){
    return <h1>Hola {getName(user)}</h1>  
  }
  return <h1>Hola extraño</h1>
}

const user = {
  firstName: 'Martín',
  lastName: 'Morales Núñez',
  avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-256.png'
}
//const name= 'Martín Morales Núñez'
//const element = <h1>{user.firstName.concat(' ',user.lastName)}</h1>

const element = <div>
    <h1>{getGreeting(user)}</h1>
    <img src={user.avatar} />
</div>
*/

const container= document.getElementById('root')

// ReactDOM.render(__QUE__,__DONDE__)
//ReactDOM.render(element, container)

//ReactDOM.render(<Exercices/>, container)
ReactDOM.render(<App/>, container)