import './App.css';
import Header from './components/Header';
import Result from './components/Result';
import UserInputs from './components/UserInputs';

const resultArr = [
  {
    year: 1,
    investmentValue: 16725,
    interest: 825,
    totalInterest: 825,
    investedCapital: 15900,
  },
];

function App() {
  return (
    <>
    <Header/>
    <main>
      <UserInputs/>
      <Result resultArr={resultArr}/>
    </main>
    </>
  );
}

export default App;
