import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import AddMe from './components/AddMe'
import AddForm from './components/AddForm'

export interface IState {
  employee: {
    name: string,
    url: string,
    age: number,
    country: string
  }[]
} 

function App() {
  const [employee, setEmployee] = useState<IState["employee"]>([
    {
      name: "Sara Flower",
      url: "https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
      age: 25,
      country: "Italy"
    },
    {
      name: "Jack Smith",
      url: "https://media.istockphoto.com/photos/shot-of-a-young-entrepreneur-using-a-mobile-phone-picture-id618348040?b=1&k=20&m=618348040&s=170667a&w=0&h=vn1wz8bli-CbKGzvsSm5IloqzK9ceXCpyU2CyfXSZpY=",
      age: 26,
      country: "Australia"
    }
  ])


  return (
    <div className="App">
      <AddForm employee={employee} setEmployee={setEmployee}/>
     <AddMe employee={employee} />
    </div>
  );
}

export default App;
