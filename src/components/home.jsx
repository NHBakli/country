import React, { useState, useEffect } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import Country from "./Country";
import '../styles/home.css';

const url = "https://restcountries.com/v3.1/all";

function Home() {
    const [dark, setDark] = useState(false);
    const [countries, setCountries] = useState([]);

    const handleClick = () => {
        setDark(!dark);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setCountries(data);
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        };

        fetchData();
    }, []);

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
                    {countries.map((country, index) => (
                        <Country
                            key={index}
                            dark={dark}
                            code={country.name.common}
                            name={country.name.common}
                            capital={country.capital}
                            population={country.population}
                            flag={country.flags.png}
                            region={country.region}
                            showDetails={() => {}} 
                        />
                    ))}
                </main>
            </div>
        </>
    );
}

export default Home;
