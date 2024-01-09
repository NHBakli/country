import React, { useState, useEffect } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import '../styles/navbar.css';

const url = "https://restcountries.com/v3.1/name/"


function Navbar() {

    const [dark, setDark] = useState(false);

    const handleClick = () => {
        setDark(!dark);
    };

    return (
        <>
        <ul className={dark ? "container dark" : "container"}>
            <li className={dark ? "header dark" : ""}>
            <h1>Country</h1>
            <button
                onClick={handleClick}
                className={dark ? "toggle dark" : "toggle"}
            >
                {dark ? (
                <>
                    <MdOutlineLightMode />
                    Light
                </>
                ) : (
                <>
                    <MdOutlineDarkMode />
                    Dark
                </>
                )}
            </button>
            </li>
        </ul>
        <div className={dark ? "containerpage dark" : "containerpage"}>
            <main className={dark ? "main dark" : "main"}>
                <>
                
                </>
            </main>
        </div>
        </>
    );
    
}

export default Navbar;
