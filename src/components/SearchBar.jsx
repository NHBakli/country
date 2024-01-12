import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ dark, handleSearch, handleRegion }) => {
return (
    <section className="search-filter">
        <section className={dark ? "dark" : ""}>
        <AiOutlineSearch />
        <input
            onChange={handleSearch}
            type="text"
            placeholder="Search for a country..."
        />
    </section>
    <form
        onSubmit={(e) => e.preventDefault()}
        className={dark ? "dark" : ""}
    >
        <select name="region" onChange={handleRegion}>
            <option value="" disabled>Region</option>
            <option value="All">All</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
    </form>
    </section>
);
};

export default SearchBar;
