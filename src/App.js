import './App.css';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Particles from 'react-particles-js'

function App() {
  return (
      <>
        <Particles 
        className="particle-canvas"
        params={{
          particles:{
            number:{
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape:{
              type: 'star',
              stroke: {
                width: 7,
                color:'#f9ab00'
              }
            }
          }
        }}
        />
        <Navbar />
        <Header />
      </>
  );
}

export default App;
