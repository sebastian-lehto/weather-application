import './App.css';
import Week from './components/Week';

const App = () => {

  const list_of_days = [1, 2, 3, 4, 5, 6, 7]
  
  return (
    <div className="App">
      <h1>Weather Applicaion</h1>
      <Week days={list_of_days}></Week>
    </div>
  );
}

export default App;
