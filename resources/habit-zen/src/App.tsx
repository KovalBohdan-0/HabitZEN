import {BrowserRouter, Route, Routes} from "react-router-dom";
import {SignUp} from "./pages/SignUp.tsx";
import {Login} from "./pages/Login.tsx";
import {Main} from "./pages/Main.tsx";
import {createTheme, ThemeProvider} from "@mui/material";
import React from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
    const theme = createTheme({
        typography: {
            "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
            "fontSize": 14,
            "fontWeightLight": 500,
            "fontWeightRegular": 500,
            "fontWeightMedium": 700
        },
        components: {
            MuiListItemButton: {
                styleOverrides: {
                    selected: {
                        backgroundColor: "blue"
                    }
                },
            }
        }
    });

    return (<>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Main/>}/>
                    <Route path='/sign-up' element={<SignUp/>}/>
                    <Route path='/login' element={<Login/>}/>s
                    <Route path='/main' element={<Main/>}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
        </>)
}

export default App
