// import React from "react";

import {User} from "../shared/User.ts";
import {useNavigate} from "react-router-dom";
import React, {useEffect} from "react";
import {SideBar} from "../components/SideBar.tsx";

export function Main() {
    let navigate = useNavigate();

    useEffect(() => {
        if (User.getJwt() == null || User.getJwt().length < 5) {
            navigate('/sign-up');
        }
    }, []);

    return (<>
        <SideBar/>
        Main
        Main
        Main
        Main
    </>)
}
