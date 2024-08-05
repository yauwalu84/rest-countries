import { useState, useEffect } from "react";
import Article from "./Article";
import Heading from "./Heading";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [searchText, setSearchText] = useState("");

  const regions = [
    "Europe",
    "Asia",
    "Africa",
    "Oceania",
    "Americas",
    "Antarctic",
  ];

  useEffect(() => {
    document.title = "All Countries";

    const fetchCountries = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        setCountries(data);
      } catch (error) {
        console.error("Failed to fetch countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const searchCountry = async () => {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${searchText}`
      );
      const data = await res.json();
      setCountries(data);
    } catch (error) {
      console.error("Failed to fetch countries by name:", error);
    }
  };

  const filterByRegion = async (region) => {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/region/${region}`
      );
      const data = await res.json();
      setCountries(data);
    } catch (error) {
      console.error("Failed to fetch countries by region:", error);
    }
  };

  const handleSearchCountry = (e) => {
    e.preventDefault();
    searchCountry();
  };

  const handleFilterByRegion = (e) => {
    filterByRegion(e.target.value);
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-800 dark:text-white">
      <Heading />
      <div className="flex flex-col md:flex-row md:items-center md:justify-between container mx-10 mb-16">
        <form onSubmit={handleSearchCountry} className="max-w-4xl flex-1">
          <input
            type="text"
            name="search"
            placeholder="Search for a country..."
            required
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="pl-10 p-2 shadow-md rounded-md lg:w-1/3 md:w-1/3 dark:bg-gray-700 mb-4"
          />
        </form>

        <select
          name="filter-by-region"
          id="filter-by-region"
          className="py-3 px-4 ml-auto my-1 p-2 shadow-md rounded-md font-medium dark:bg-gray-700"
          onChange={handleFilterByRegion}
        >
          {regions.map((region, index) => (
            <option key={index} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>

      <div className="mx-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {countries.map((country) => (
          <Article key={country.name.common} {...country} />
        ))}
      </div>
    </section>
  );
}
