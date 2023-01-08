import logo from './logo.svg';
import './App.css';
var style ={
  color: 'green',
  fontSize: '50px',
  fontWeight: 700,
}
function App() {
  var name ="Sadia";
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
        <p style={style}>hello my dear {name}</p>

        <h3 style={{color:'yellow'}}>I am Mahmudul, I realy love you, I don't know what do you think about me but I know you love me but some confusion have in your mind. dear {name} don't worry I'm only for you.</h3>
        <h2>your name is {person1.firstName +" "+ person1.lastName}</h2>
        <p>Your Salary is: {person1.Salary+bonous}</p>
        <Person name={names[0]} job={jobs[0]}></Person>
        <Person name={names[1]} job={jobs[1]}></Person>
        <Person name={names[2]} job={jobs[2]}></Person>
        <Person name={names[3]} job={jobs[3]}></Person>
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
    boxShadow: "0px 2px 20px 0px green"
  }
  return ( 
    <div  style={personStyle}>
      <h1 >Student Name: {props.name}</h1>
      <h3>Department Name: {props.job}</h3>
    </div>
  )
}

export default App;
