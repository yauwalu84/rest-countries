import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Heading from "./Heading";

export default function SingleCountry() {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const fetchSingleCountry = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const data = await res.json();
        setCountry(data);
      } catch (error) {
        console.error("Failed to fetch country:", error);
      }
    };

    fetchSingleCountry();
  }, [name]);

  useEffect(() => {
    document.title = `Countries | ${name}`;
  }, [name]);

  return (
    <section className="bg-gray-100 dark:bg-gray-800 dark:text-white">
      <Heading />
      <div className="px-8 max-w-7xl mx-auto">
        <Link
          to="/"
          className="inline-block mt-8 bg-white py-2 px-6 rounded shadow text-gray-700 hover:bg-gray-200 transition-all duration-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-400"
        >
          &larr; Back
        </Link>
      </div>
      <div className="px-8 max-w-7xl mx-auto">
        {country.map((item) => (
          <div
            key={item.population}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 md:place-items-center md:h-screen"
          >
            <article>
              <img src={item.flags.svg} alt={`${item.name.common} flag`} />
            </article>

            <article>
              <h1 className="font-bold text-gray-900 dark:text-white text-4xl lg:text-6xl">
                {item.name.official}
              </h1>
              <ul className="my-4 flex flex-col items-start justify-start gap-2 text-slate-700 dark:text-gray-400">
                <li>
                  <strong>Capital:</strong> {item.capital[0]}
                </li>
                <li>
                  <strong>Population:</strong>{" "}
                  {item.population.toLocaleString()}
                </li>
                <li>
                  <strong>Region:</strong> {item.region}
                </li>
                <li>
                  <strong>Subregion:</strong> {item.subregion}
                </li>
                <li>
                  <strong>Currency:</strong>{" "}
                  {/* Add currency information here */}
                </li>
              </ul>

              {item.borders && (
                <>
                  <h3 className="text-gray-900 font-bold text-lg mb-2 dark:text-white">
                    Borders:
                  </h3>
                  <ul className="flex flex-wrap items-start justify-start gap-2">
                    {item.borders.map((border, index) => (
                      <li
                        key={index}
                        className="bg-white p-2 text-xs tracking-wide shadow dark:bg-gray-800 dark:text-gray-400 text-gray-700"
                      >
                        {border}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
