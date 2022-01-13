import logo from './logo.PNG';
import './App.css';
import Footer from './components/footer'
import React,{useState,useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from 'react-bootstrap';

function App() {
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('posts.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello, world!</h1>
      </header>
      <div className="Data">
     {
       data && data.length>0 && data.map((post)=>{
        return <Card>
         <Card.Header as="h5">{post.title}</Card.Header>
         <Card.Body>
          <Card.Text>
            {post.text}
          </Card.Text>
        </Card.Body>
      </Card> ;
       }
       )
     }
    </div>
        <Footer/>
    </div>
  );
}

export default App;
