import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  return (
    <Link to={`/${country.alpha3Code}`}>
      <div className="mx-auto bg-light-elem dark:bg-dark-blue max-w-full w-[75%] md:w-full shadow-sm rounded-md">
        <img src={country.flags.png} className="object-cover w-full h-auto" alt={country.name} />
        <div className="md:px-3 md:py-5 px-5 py-7 dark:text-light-elem text-very-dark-blue">
          <h1 className="font-semibold">{country.name}</h1>
          <ul className="mt-3">
            <li className="font-semibold">
              Population: <span className="font-medium">{country.population}</span>
            </li>
            <li className="font-semibold">
              Region: <span className="font-medium">{country.region}</span>
            </li>
            <li className="font-semibold">
              Capital: <span className="font-medium">{country.capital}</span>
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
