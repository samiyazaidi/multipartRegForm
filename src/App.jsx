
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignIn } from './components/signin';
import { PassPage } from './components/password/passPage';
import {Page} from './components/page';
import { Dashboard } from './components/Dashboard/dashboard';

const App=() =>{

  return (
    <>
  
       <BrowserRouter>
       <Routes>
        <Route path= "/login" element= {<SignIn/>}></Route>
        <Route path= "/form" element= {<Page/>}></Route>
        <Route path= "/forgotPassword" element= {<PassPage/>}></Route>
       <Route path = "/dashboard" element={<Dashboard/>}></Route>




       </Routes>
       </BrowserRouter>
      </>
  )
}

export default App
