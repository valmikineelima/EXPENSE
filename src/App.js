import logo from './logo.svg';
import './App.css';
import Employee from './employee';

  function App() {
    const emp= [
      {id:'1', emp_name :'valmiki', exp: 2, DOB: new Date(2002,11,11)},
      {id:'2', emp_name :'neelima', exp: 1, DOB: new Date(1998,12,10)},
      {id:'3', emp_name :'Ravi', exp: 9, DOB: new Date(2000,2,24)},
      {id:'4', emp_name :'madhu', exp: 19, DOB: new Date(2005,12,6)},
      {id:'5', emp_name :'bujji', exp: 11, DOB: new Date(2004,1,27)},
    ]
    
    return (
      <div>
        <h2>Hello good morning!</h2>
        <p>Tricon Infotech</p>
  
        <Employee emp_name={emp[0].emp_name} exp={emp[0].exp} DOB = {emp[0].DOB}></Employee>
        <Employee emp_name={emp[1].emp_name} exp={emp[1].exp} DOB = {emp[1].DOB}></Employee>
        <Employee emp_name={emp[2].emp_name} exp={emp[2].exp} DOB = {emp[2].DOB}></Employee>
        <Employee emp_name={emp[3].emp_name} exp={emp[3].exp} DOB = {emp[3].DOB}></Employee>
        <Employee emp_name={emp[4].emp_name} exp={emp[4].exp} DOB = {emp[4].DOB}></Employee>

  
      </div>
    );
  
}


export default App;
