import { useState } from "react";

function Layout () {
    const [ Count, setCount] = useState(0);
    return (
        <>
            <div>
                <h1> {Count}</h1>
                <h2 onClick={(Count) =>{
                    setCount (Count + 1);
                }}>Count ++</h2>
                <h3 onClick={(Count) =>{
                    setCount (Count - 1);
                }}>Count ++</h3>
            </div>
        </>
    )
}

export default Layout;