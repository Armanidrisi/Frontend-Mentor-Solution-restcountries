import React, { useState, useEffect } from "react";
import Search from "./Search";
import CountryCard from "./CountryCard";
import Loader from "./Loader";
import { data } from "../constants/data";
import InfiniteScroll from "react-infinite-scroll-component";

const Home = () => {
  const [countries, setCountries] = useState(data);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreData = () => {
    setTimeout(() => {
      setCountries((prevCountries) => [...prevCountries, ...data]);
    }, 1500);
  };

  useEffect(() => {
    if (countries.length >= data.length) {
      setHasMore(false);
    }
  }, [countries]);

  const onSearch = (e) => {
    const searchTerm = e.target.value;
    const filteredCountries = data.filter((country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCountries(filteredCountries);
  };

  const changeRegion = (e) => {
    if (e.target.value === "All") {
      setCountries(data);
    } else {
      const filteredCountries = data.filter(
        (country) => country.region === e.target.value
      );
      setCountries(filteredCountries);
    }
  };

  return (
    <div className="px-6 py-12 md:px-12 w-screen h-auto bg-very-light-gray dark:bg-very-dark-blue">
      <Search search={onSearch} changeRegion={changeRegion} />
      <div className="my-12">
        <InfiniteScroll
          dataLength={countries.length}
          next={loadMoreData}
          hasMore={hasMore}
          loader={<Loader />}
          endMessage={
            <p className="text-center my-4 dark:text-light-elem text-very-dark-blue">
              No more countries to show.
            </p>
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {countries.map((country) => (
              <CountryCard key={country.name} country={country} />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Home;
