import './App.scss';
import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <Footer className="footer"/>
    </div>
  );
}

export default App;
