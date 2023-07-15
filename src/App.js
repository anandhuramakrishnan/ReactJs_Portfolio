import '../src/Components/Navbar/Navbar'
import Navbar from '../src/Components/Navbar/Navbar';
import Slider from '../src/Components/Slider/Slider'
import './App.css';
import RightDiv from './Components/Rightdiv/RightDiv';

function App() {
  return (
  <div>
    <Navbar/>
    
    <div className='second_div'>
    <Slider/>
    <RightDiv/>
    </div>
   
  </div>
  );
}

export default App;
