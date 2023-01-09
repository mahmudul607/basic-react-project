import logo from './logo.svg';
import './App.css';
import banana from './products/banana.png';
import apple from './products/apple.png';
import pineapple from './products/pineapple.png';
import mango from './products/mango.png';
import { useState } from 'react';
var style ={
  color: 'green',
  fontSize: '50px',
  fontWeight: 700,
}

//main function
function App() {
  var name ="Visitor";
  var  person1 ={
      firstName:"Hasan",
      lastName:"Ali",
      Reg: 10000,
    };
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={style}>Hello my dear {name}</p>

        <Counter></Counter>

        <h2>I am {person1.firstName +" "+ person1.lastName}</h2>
        <p>My Reg No. is: {person1.Reg}</p>

        <div style={displayStyle}>
        {
          employes.map(employe => <Person employe = {employe}></Person>)
        }
        </div>
      <div style={displayStyle}>
        {
          products.map(product => <Product product ={product}></Product>)
        }
        
      </div>
       
      </header>
    </div>
  );
}
//End main section

//Start state function
function Counter(){
  const [count, setCount] = useState(0);
  const handlerIncrease = () => setCount(count + 1);
  const handlerDecrease = () => setCount(count - 1);
  return(
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handlerIncrease}>Increase</button>
      <button onClick={handlerDecrease}>Decrease</button>
    </div>
  )
}
//End state function

//start employes Object with few property
const employes = [
  {name:'Mahmudul Hasan', job:'Web Development'},
  {name:'Hamidul Islam', job:'Network Engineer'},
  {name:'Naimur Rahman', job:'System Engineer'},
  {name:'Hasinur Rahman', job:'Software Engineer'},
  {name:'Obaidullah', job:'Tecnichal Person'}
]
//end employes Object with few property

//Start employe Person function
function Person(props){
  const {name , job} = props.employe;
  const personStyle = {
    border:'2px solid red',
    margin:'10px',
    padding:'10px',
    boxShadow: "0px 2px 20px 0px green",
    width:'25%',
    fontSize:'12px',
    borderRadius:'20px'
  }
  return ( 
    <div  style={personStyle}>
      <img style={{width:'100%'}} src={logo} className="App-logo" alt="logo"/>
      <h1 >Name: {name}</h1>
      <h3>Department: {job}</h3>
    </div>
  )
}

//End employe Person function

//Style Variables
const displayStyle = {
  display:'flex',
  margin:'5px',
  width:'100%'
}
//Style Variables

//Start Object declaration for product
const productImages =[apple, mango, banana, pineapple];
const products = [
  {Name:'Apple', Price:'$7.99', Conditions:'Fresh', image:productImages[0]},
  {Name:'Mango', Price:'$5.99', Conditions:'Fresh', image:productImages[1]},
  {Name:'Banana', Price:'$2.99', Conditions:'Fresh', image:productImages[2]},
  {Name:'Pineapple', Price:'$6.99', Conditions:'Fresh', image:productImages[3]}

]
//End Object declaration for product

//Start Product function
function Product(props){
  const productStyle = {
    border:'2px solid yellow',
    backgroundColor:'gray',
    height:'350px',
    width:'300px',
    padding:'10px',
    margin:'5px'

  }
  const {Name , Price, image} = props.product;
  return(
    <div style={productStyle}>
       <img style={{width:'40%', height:'40%'}} src={image} alt="" />
      <h2 style={{color:'orange'}}>{Name}</h2>
      <h4>Price: {Price}</h4>
      <button>Buy Now</button>
    </div>
  )
}
//End Product function

export default App;
