import logo from './logo.svg';
import './App.css';
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
        <div style={{display:'flex'}}>
        <Person name={names[0]} job={jobs[0]}></Person>
        <Person name={names[1]} job={jobs[1]}></Person>
        <Person name={names[2]} job={jobs[2]}></Person>
        <Person name={names[3]} job={jobs[3]}></Person>
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

export default App;
