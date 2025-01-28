
// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignIn } from './components/signin';
import { PassPage } from './components/password/passPage';
import {Page} from './components/page';
// import { Dashboard } from './components/Dashboard/dashboard';
// import { MyMap } from './components/Dashboard/map';
// import MyChart from './components/Dashboard/chart';
const App=() =>{
  return (
    <>
  
       <BrowserRouter>
       <Routes>
        {/* <Route path= "/" element= {<Signup/>}></Route> */}
        <Route path= "/login" element= {<SignIn/>}></Route>
        <Route path= "/form" element= {<Page/>}></Route>
        <Route path= "/forgotPassword" element= {<PassPage/>}></Route>
        {/* <Route path= "/otp" element= {<OTTTT/>}></Route> */}
        {/* <Route path= "/signin" element= {<SignInWithImage/>}></Route> */}
       {/* <Route path = "/dashboard" element={<Dashboard/>}></Route>
       <Route path = "/map" element={<MyMap/>}></Route> */}

       </Routes>
       </BrowserRouter>
      </>
  )
}

export default App
