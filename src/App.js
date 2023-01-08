import logo from './logo.svg';
import './App.css';
import banana from './products/banana.png';
import apple from './products/apple.png';
import pineapple from './products/pineapple.png';
import mango from './products/mango.png';
var style ={
  color: 'green',
  fontSize: '50px',
  fontWeight: 700,
}
function App() {
  var name ="Visitor";
  var bonous =4000;
  var  person1 ={
      firstName:"Hasan",
      lastName:"Ali",
      Salary: 10000,
    };
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={style}>Hello my dear {name}</p>
        <h2>I am {person1.firstName +" "+ person1.lastName}</h2>
        <p>My Reg No. is: {person1.Salary+bonous}</p>
        <div style={displayStyle}>
        <Person name={names[0]} job={jobs[0]}></Person>
        <Person name={names[1]} job={jobs[1]}></Person>
        <Person name={names[2]} job={jobs[2]}></Person>
        <Person name={names[3]} job={jobs[3]}></Person>
        </div>
      <div style={displayStyle}>
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        <Product product={products[3]}></Product>
        
      </div>
       
      </header>
    </div>
  );
}
const jobs= ['Network Engineer', 'Web-developer', 'Software Engineer','System Engineer'];
const names=['Mahmudul Hasan', 'Hamidul Islam', 'Naimur Rahman', 'Hasinur Rahman'];
function Person(props){
  
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
      <h1 >Name: {props.name}</h1>
      <h3>Department: {props.job}</h3>
    </div>
  )
}
const displayStyle = {
  display:'flex',
  margin:'5px'
}
const productImages =[apple, mango, banana, pineapple];
const products = [
  {Name:'Apple', Price:'$7.99', Conditions:'Fresh', image:productImages[0]},
  {Name:'Mango', Price:'$5.99', Conditions:'Fresh', image:productImages[1]},
  {Name:'Banana', Price:'$2.99', Conditions:'Fresh', image:productImages[2]},
  {Name:'Pineapple', Price:'$6.99', Conditions:'Fresh', image:productImages[3]}
]
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

export default App;
