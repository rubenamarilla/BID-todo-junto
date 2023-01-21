import './App.css';
import PersonCard from './components/personCard';

function App() {
  return (
    <div className='App'>
      <PersonCard name={"Jane"} lastName={"Doe"} age={45} hairColor={"Gray"}/>
      <PersonCard name={"John"} lastName={"Smith"} age={18} hairColor={"Brown"}/>
    </div>
  );
}

export default App;
