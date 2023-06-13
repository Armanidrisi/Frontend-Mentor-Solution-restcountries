import { regions } from "../constants";

const Search = ({ search, changeRegion }) => {
  return (
    <div className="flex justify-between flex-col gap-8 md:flex-row">
      <div className="flex text-dark-blue dark:text-light-elem bg-light-elem dark:bg-dark-blue py-3 px-4 shadow-md rounded-lg gap-5">
        <label for="search">
          <svg
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            height="1.5em"
            width="1.5em"
            className="dark:text-light-elem text-very-light-blue"
          >
            <path
              fill="currentColor"
              d="M38.7 40.85 26.65 28.8q-1.5 1.3-3.5 2.025-2 .725-4.25.725-5.4 0-9.15-3.75T6 18.75q0-5.3 3.75-9.05 3.75-3.75 9.1-3.75 5.3 0 9.025 3.75 3.725 3.75 3.725 9.05 0 2.15-.7 4.15-.7 2-2.1 3.75L40.95 38.7q.45.4.45 1.025 0 .625-.5 1.125-.45.45-1.1.45-.65 0-1.1-.45Zm-19.85-12.3q4.05 0 6.9-2.875Q28.6 22.8 28.6 18.75t-2.85-6.925Q22.9 8.95 18.85 8.95q-4.1 0-6.975 2.875T9 18.75q0 4.05 2.875 6.925t6.975 2.875Z"
            />
          </svg>
        </label>
        <input
          className="w-full bg-transparent placeholder-dark-blue dark:placeholder-light-elem font-[14px] font-medium outline-none"
          placeholder="search for a country"
          id="search"
          type="text"
          onChange={search}
        />
      </div>
      <div className="flex text-dark-blue dark:text-light-elem bg-light-elem dark:bg-dark-blue py-3 px-4 shadow-md rounded-lg gap-5 max-w-full">
        <select
          onChange={changeRegion}
          className="max-w-full bg-transparent placeholder-dark-blue dark:placeholder-light-elem font-[14px] font-medium outline-none"
        >
          <option disabled selected>
            Filter by region
          </option>
          {regions.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Search;
