import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './signUp/signUp.js'
import Login from './login/login.js'
import Home from './home/home.js'
import Header from './Header/Header.js'


function App() {
    return (
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path='' element={<Home />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/signUp' element={<SignUp />}></Route>
            </Routes>
        </BrowserRouter>
  );
}

export default App;