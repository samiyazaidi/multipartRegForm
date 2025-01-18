
// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignIn } from './components/signin';
import { Signup } from './components/signup';
import Page from './components/page';
import { NSignup } from './components/newsignup';
const App=() =>{
  return (
   
  
       <BrowserRouter>
       <Routes>
       
        <Route path= "/" element= {<Signup/>}></Route>
        <Route path= "/form" element= {<Page/>}></Route>
        <Route path= "/signup" element= {<NSignup/>}></Route>
        <Route path= "/login" element= {<SignIn/>}></Route>
       </Routes>
       </BrowserRouter>
    
  )
}

export default App
