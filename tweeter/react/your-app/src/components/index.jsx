import { useState } from "react";
import Login from "./loginLayout";
import Sigup from "./signup";

function  Index () {
    const [islogin, setIslogin] = useState(true);

    const updateState = (newState) =>{
        setIslogin(newState)
    }
    return(
    <>
        {islogin && <Login setLogin = {updateState} />}
        {!islogin &&  <Sigup setLogin = {updateState} />}
    </>
    );

}

export default Index;