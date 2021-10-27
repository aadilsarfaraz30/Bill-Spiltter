import './App.css';
import LeftComponent from './components/leftComponent/LeftComponent';
import RightComponent from './components/rightComponent/RightComponent';
import ApiProvider from './context/ApiContext';
function App() {
  return (
    <ApiProvider>
      <div className='App'>
        <div className='container'>
          <div className='title'>
            <p>SPLI</p>
            <p>TTER</p>
          </div>
          <div className='main'>
            <LeftComponent />
            <RightComponent />
          </div>
        </div>
      </div>
    </ApiProvider>
  );
}

export default App;
