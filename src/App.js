import './App.css';
import Header from './Components/Header/Header';
import LinkButtonGroup from './Components/LinkButtonGroup/LinkButtonGroup'

function App() {
  const categories = [
    'Software',
    'Music',
    'Outdoors'
  ];

  return (
    <div className="App">
      <Header title='Mitchell McKee' />
      <LinkButtonGroup categories={categories} />
    </div>
  );
}

export default App;
