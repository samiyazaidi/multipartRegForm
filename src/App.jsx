
// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignIn } from './components/signin';
import { Signup } from './components/signup';

function App() {

  return (
  
       <BrowserRouter>
       <Routes>
       
        <Route path= "/" element= {<Signup/>}></Route>
        <Route path= "/signin" element= {<SignIn/>}></Route>
        
       </Routes>
       </BrowserRouter>
       
      
    
  )
}

export default App
