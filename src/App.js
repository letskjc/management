import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [{
  'id' : 1
  ,'image' : 'https://placeimg.com/64/64/1'
  ,'name' : '김종철1'
  ,'birthday' : '800920'
  ,'gender' : '남자'
  ,'job' : 'CEO'
},
{
  'id' : 2
  ,'image' : 'https://placeimg.com/64/64/2'
  ,'name' : '김종철2'
  ,'birthday' : '920920'
  ,'gender' : '여자'
  ,'job' : 'CTO'
},
{
  'id' : 3
  ,'image' : 'https://placeimg.com/64/64/3'
  ,'name' : '김종철3'
  ,'birthday' : '880120'
  ,'gender' : '남자'
  ,'job' : 'CIO'
}]

class App extends Component {
  render() {
    return (
      <div>
        {
          // map 사용시 key 속성 필수.
          customers.map( c => {
            return (
              <Customer 
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          })
        }
  
      </div>
    );
  }
}

export default App;
