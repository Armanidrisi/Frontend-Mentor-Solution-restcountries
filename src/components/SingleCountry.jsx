import React from "react";
import { useParams, Link } from "react-router-dom";
import { data } from "../constants/data";

const SingleCountry = () => {
  const { name } = useParams();
  const country = data.find((country) => country.alpha3Code === name);

  if (!country) {
    return <div>Country not found</div>;
  }

  const renderBorders = () => {
    return country.borders.map((border) => {
      const borderCountry = data.find((country) => country.alpha3Code === border);
      return (
        <button
          key={border}
          className="shadow-lg bg-light-elem dark:bg-dark-blue px-4 py-1"
        >
          {borderCountry?.name}
        </button>
      );
    });
  };

  return (
    <div className="px-6 py-10 w-screen h-auto bg-very-light-gray dark:bg-very-dark-blue dark:text-light-elem text-very-dark-blue">
      <button className="flex flex-row gap-2 items-center shadow-lg bg-light-elem dark:bg-dark-blue px-4 py-1">
        <svg
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          width="1em"
        >
          <path
            fill="currentColor"
            d="m22.35 38.95-13.9-13.9q-.25-.25-.35-.5Q8 24.3 8 24q0-.3.1-.55.1-.25.35-.5L22.4 9q.4-.4 1-.4t1.05.45q.45.45.45 1.05 0 .6-.45 1.05L13.1 22.5h24.8q.65 0 1.075.425.425.425.425 1.075 0 .65-.425 1.075-.425.425-1.075.425H13.1l11.4 11.4q.4.4.4 1t-.45 1.05q-.45.45-1.05.45-.6 0-1.05-.45Z"
          />
        </svg>{" "}
        <Link to="/">Back</Link>
      </button>
      <div className="my-12 flex flex-col md:flex-row gap-8 md:gap-20">
        <div>
          <img
            src={country.flags.png}
            className="h-full w-full"
            alt={country.name}
          />
        </div>
        <div className="flex flex-col md:flex-row gap-20">
          <div>
            <h1 className="text-2xl font-bold">{country.name}</h1>
            <ul className="mt-4">
              <li className="font-semibold mb-2 text-md">
                Native name:{" "}
                <span className="font-medium">{country.nativeName}</span>
              </li>
              <li className="font-semibold mb-2 text-md">
                Population:{" "}
                <span className="font-medium">{country.population}</span>
              </li>
              <li className="font-semibold mb-2 text-md">
                Region: <span className="font-medium">{country.region}</span>
              </li>
              <li className="font-semibold mb-2 text-md">
                Subregion:{" "}
                <span className="font-medium">{country.subregion}</span>
              </li>
              <li className="font-semibold mb-2 text-md">
                Capital: <span className="font-medium">{country.capital}</span>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="font-semibold mb-2 text-md">
                Top level domain:{" "}
                <span className="font-medium">
                  {country.topLevelDomain.join(", ")}
                </span>
              </li>
              <li className="font-semibold mb-2 text-md">
                Currencies:{" "}
                <span className="font-medium">
                  {country.currencies[0].name}
                </span>
              </li>
              <li className="font-semibold mb-2 text-md">
                Languages:{" "}
                <span className="font-medium">
                  {country.languages.map((language) => language.name).join(", ")}
                </span>
              </li>
            </ul>
            <div className="mt-7">
              <h1 className="text-md font-bold mx-auto mb-4">
                Border countries
              </h1>
              <div className="flex flex-wrap gap-3">{renderBorders()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCountry;
