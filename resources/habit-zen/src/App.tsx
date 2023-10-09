// import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {SignUp} from "./pages/SignUp.tsx";
import {Login} from "./pages/Login.tsx";
import {Main} from "./pages/Main.tsx";

function App() {

    return (<>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<SignUp/>}/>
                    <Route path='/sign-up' element={<SignUp/>}/>
                    <Route path='/login' element={<Login/>}/>s
                    <Route path='/main' element={<Main/>}/>
                </Routes>
            </BrowserRouter>
        </>)
}

export default App
