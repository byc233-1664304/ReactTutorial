import './App.css';
import User from './User';

function App() {
  const users = [{ name:"Kanna", age: 18 }, { name:"Jojo", age: 24 }, { name:"Dio", age: 23 }, { name:"Nahida", age: 500 }];

  return (
    <div className="App">
      {
        users.map((user, index) => {
          const { name, age } = user;
          return <User key={index} name={name} age={age}/>
        })
      }
    </div>
  );
}

export default App;
