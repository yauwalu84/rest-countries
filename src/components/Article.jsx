import React from "react";
import { Link } from "react-router-dom";

export default function Article({
  flags,
  name,
  population,
  region,
  subregion,
}) {
  return (
    <Link to={`/${name.common}`}>
      <article className="bg-white hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-200 rounded-lg shadow overflow-hidden">
        <img
          src={flags.svg}
          alt={`${name.common} flag`}
          className="md:h-64 w-full object-cover"
        />
        <div className="p-4">
          <h2 className="font-bold text-lg text-gray-900 mb-2 dark:text-gray-400">
            {name.common}
          </h2>
          <ul className="flex flex-col items-start justify-start gap-2 dark:text-gray-400">
            <li>
              <strong>Population:</strong> {population.toLocaleString()}
            </li>
            <li>
              <strong>Region:</strong> {region}
            </li>
            <li>
              <strong>Subregion:</strong> {subregion}
            </li>
          </ul>
        </div>
      </article>
    </Link>
  );
}
