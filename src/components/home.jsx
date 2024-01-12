// Home.jsx
import React, { useState, useEffect } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import Country from "./Country";
import SearchBar from "./SearchBar";
import '../styles/home.css';

const url = "https://restcountries.com/v3.1/all";

function Home() {
    const [dark, setDark] = useState(false);
    const [countries, setCountries] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [regionFilter, setRegionFilter] = useState("");

    const handleClick = () => {
        setDark(!dark);
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleRegion = (e) => {
        setRegionFilter(e.target.value);
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

    const filteredCountries = countries.filter((country) => {
        const matchSearchTerm = country.name.common.toLowerCase().includes(searchTerm.toLowerCase());
        const matchRegion = regionFilter === "All" || country.region.includes(regionFilter);
        return matchSearchTerm && matchRegion;
    });

    return (
        <>
        <div className={dark ? "allcontainer dark" : "allcontainer"}>
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
                    <SearchBar
                        dark={dark}
                        handleSearch={handleSearch}
                        handleRegion={handleRegion}
                    />
                    <main className={dark ? "main dark" : "main"}>
                    {filteredCountries.map((country, index) => (
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
            </div>
        </>
    );
}

export default Home;
