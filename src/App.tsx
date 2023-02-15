import './App.css';
import { AddSalesData } from './Components/inputForm';
import {Routes , Route} from 'react-router-dom';
import { CreateUpdate } from './Pages/createUpdates';
import { Home } from './Pages/Home';
function App() {


  return (
    <div >
     <h1 style={{textAlign:'center' , margin:10 , fontSize:26, padding:5 , color:'white' , backgroundColor:'purple',fontWeight:'bold'}}>
      Brands Daily Sales
    </h1>
       <Routes>
    <Route  path='/create' element={<CreateUpdate/>} />
    <Route  path='/' element={<Home/>} />
    </Routes>
    </div>
  );
}

export default App;
