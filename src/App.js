// import all necessary resources
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {

  return (
    <div className="container">
      {/* header of the webpage */}
      <Header></Header>
      <main>
        {/* all courses and cart in Shop component */}
        <Shop />
      </main>
    </div>
  );
}


export default App;
